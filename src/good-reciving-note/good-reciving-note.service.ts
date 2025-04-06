import { Injectable, NotFoundException, BadRequestException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateGrnDto } from './dto/create-good-reciving-note.dto';
import { UpdateGrnDto } from './dto/update-good-reciving-note.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { isAlphabetic } from 'src/utils/alpabetic-validation';
import {  NotificationsGateway } from 'src/notfications/notfications.gateway';
import { NotificationsService } from 'src/notfications/notfications.service';

@Injectable()
export class GrnService {
  constructor(
    private prisma: PrismaService,
    private readonly notificationsGateway: NotificationsGateway,
    private notificationService:NotificationsService

  ) {}
  

  
  async create(createGrnDto: CreateGrnDto) {
    console.log(createGrnDto);
    const { grn_items, ...grnData } = createGrnDto;
  
    try {
      // Input validation
      if (!createGrnDto.supplier || !isAlphabetic(createGrnDto.supplier)) {
        throw new BadRequestException('Supplier name must contain only alphabetic characters (A-Z, a-z).');
      }
      if (!Number.isInteger(createGrnDto.purchase_req_num) || !Number.isInteger(createGrnDto.purchase_order_num)) {
        throw new BadRequestException('Purchase requisition and order numbers must be integers.');
      }
      if (createGrnDto.prepared_by_id !== undefined && !Number.isInteger(createGrnDto.prepared_by_id)) {
        throw new BadRequestException('Approval ID must be an integer if provided.');
      }
      if (!grn_items || grn_items.length === 0) {
        throw new BadRequestException('GRN must contain at least one item.');
      }
  
      // Validate each GRN item
      for (const item of grn_items) {
        if (!Number.isInteger(item.unit_measurement_id)) {
          throw new BadRequestException('Unit measurement ID must be an integer.');
        }
        if (typeof item.qua_delivered !== 'number' || item.qua_delivered <= 0) {
          throw new BadRequestException('Quantity delivered must be a positive number.');
        }
        if (typeof item.unit_price !== 'number' || item.unit_price <= 0) {
          throw new BadRequestException('Unit price must be a positive number.');
        }
      }
  
      // Start transaction for atomic operations
      return await this.prisma.$transaction(async (prisma) => {
        try {
          const total = grn_items.reduce((sum, item) => sum + item.qua_delivered * item.unit_price, 0);
          
          const totalData = await prisma.total.create({ 
            data: { total_price: total } 
          });
         
          const approvement = await prisma.approvement.create({ 
            data: { prepared_by_id: grnData.prepared_by_id } 
          });
  
          const grn = await prisma.grn.create({
            data: {
              date: grnData.date,
              supplier: grnData.supplier,
              suppliers_inv_other_no: grnData.suppliers_inv_other_no,
              store_location: grnData.store_location,
              purchase_req_num: grnData.purchase_req_num,
              purchase_order_num: grnData.purchase_order_num,
              approvment_id: approvement.id,
              total_id: totalData.id,
            },
          });
  
          // Create GRN items
          await Promise.all(grn_items.map(async (grnItem, index) => {
            await prisma.grnItem.create({
              data: {
                grn_id: grn.id,
                ser_no: index + 1,
                description: grnItem.description,
                unit_measurement_id: grnItem.unit_measurement_id,
                qua_ordered: grnItem.qua_ordered,
                qua_delivered: grnItem.qua_delivered,
                quantity_received: grnItem.quantity_received,
                unit_price: grnItem.unit_price,
                total_item_price: grnItem.qua_delivered * grnItem.unit_price,
                remark: grnItem.remark,
              },
            });
          }));
  
          // Notify roles (don't let notification failures fail the whole operation)
          try {
            await this.notifyStockRoles(grn.id);
          } catch (notificationError) {
            console.error('Notification failed:', notificationError);
            // Continue even if notification fails
          }
  
          return grn;
        } catch (transactionError) {
          console.error('Transaction failed:', transactionError);
          throw new InternalServerErrorException('Failed to create GRN due to a database error');
        }
      }
    
    );
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // Handle specific Prisma errors
        switch (error.code) {
          case 'P2002':
            throw new ConflictException('Unique constraint violation: ' + error.meta?.target);
          case 'P2003':
            throw new BadRequestException('Foreign key constraint failed: ' + error.meta?.field_name);
          case 'P2025':
            throw new NotFoundException('Related record not found: ' + error.meta?.cause);
          default:
            throw new InternalServerErrorException(`Database error: ${error.message}`);
        }
      } else if (error instanceof BadRequestException || 
                 error instanceof ConflictException || 
                 error instanceof NotFoundException) {
        // Re-throw known HTTP exceptions
        throw error;
      } else {
        // Handle all other unexpected errors
        console.error('Unexpected error in GRN creation:', error);
        throw new InternalServerErrorException('An unexpected error occurred while creating the GRN');
      }
    }
  }
  
  private async notifyStockRoles(grnId: number) {
   
    try {
      const stockAdminRole = await this.prisma.role.findUnique({ where: { role: 'stock-admin' } });
      const stockManagerRole = await this.prisma.role.findUnique({ where: { role: 'stock-manager' } });
         
      if (!stockAdminRole || !stockManagerRole) {
        console.warn('Roles not found for notification');
        return;
      }
     
  
      // Using findFirst for both queries as requested
      const [stockAdmin, stockManager] = await Promise.all([
        this.prisma.employee.findFirst({ where: { role_id: stockAdminRole.id } }),
        this.prisma.employee.findFirst({ where: { role_id: stockManagerRole.id } })
      ]);
  
      // Prepare notifications array
      const notifications = [];
  
      if (stockAdmin) {
        notifications.push(
          this.sendNotification(
            stockAdmin.id,
            'Dear Admin of store: The stock keeper has added new Goods',
            grnId
          ).catch(e => console.error(`Failed to notify admin ${stockAdmin.id}`, e))
        );
      }
  
      if (stockManager) {
        notifications.push(
          this.sendNotification(
            stockManager.id,
            'Dear Manager of store: The stock keeper has added new Goods',
            grnId
          ).catch(e => console.error(`Failed to notify manager ${stockManager.id}`, e))
        );
      }
  
      // Send all notifications in parallel
      if (notifications.length > 0) {
        await Promise.all(notifications);
      } else {
        console.warn('No stock admins or managers found to notify');
      }
    } catch (error) {
      console.error('Error in notifyStockRoles:', error);
      // Don't rethrow to prevent breaking the main operation
    }
  }




  private async sendNotification(userId: number, message: string, grnId: number) {
    // const grnExists = await this.findOne(grnId);

    try {
      await this.notificationsGateway.sendNotificationToEmployee(userId, message, grnId);
      
      // Ensure GRN exists before creating notification
    
      // if (!grnExists) {
      //   throw new Error(`GRN ${grnId} doesn't exist`);
      // }
  
      // return await this.notificationService.createNotification(
      //   userId,
      //   message,
      //   grnId
      // );


    } catch (error) {
      console.error(`Failed to send notification to user ${userId}:`, error);
      throw error;
    }
  }

  async findAll() {
    return this.prisma.grn.findMany(
      // {
      //   include:{

      //     grn_items: {
      //       include: {
      //         item: true,
      //         unit_measurement:true
      //       },
      //     },
      //     approvement: true,
      //     total: true
      //   }
      // }
    );
    
  }

  async findOne(id: number) {
    if (!Number.isInteger(id)) {
      throw new BadRequestException('ID must be an integer.');
    }

    const grn = await this.prisma.grn.findUnique({
      where: { id },
      include:{

        grn_items: {
          include: {
            item: true,
            unit_measurement:true,
            
          }
          
        },
        Notification:true,
        approvement: true,
        total: true
      }
    });

    if (!grn) {
      throw new NotFoundException(`GRN with ID ${id} not found.`);
    }

    return grn;
  }

  async update(id: number, updateGrnDto: UpdateGrnDto) {
    if (!Number.isInteger(id)) {
      throw new BadRequestException('ID must be an integer.');
    
    }

    try {
      return await this.prisma.grn.update({
        where: { id },
        data: {
          date: updateGrnDto.date,
          supplier: updateGrnDto.supplier,
          suppliers_inv_other_no: updateGrnDto.suppliers_inv_other_no,
          store_location: updateGrnDto.store_location,
          purchase_req_num: updateGrnDto.purchase_req_num,
          purchase_order_num: updateGrnDto.purchase_order_num,
          // approvment_id: updateGrnDto.approvment_id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new NotFoundException(`Unable to update. GRN with ID ${id} not found.`);
      }
      throw new BadRequestException('Invalid data provided for update.');
    }
  }

  // async remove(id: number) {
  //   if (!Number.isInteger(id)) {
  //     throw new BadRequestException('ID must be an integer.');
  //   }

  //   try {
  //     return await this.prisma.grn.delete({
  //       where: { id },
  //     });
  //   } catch (error) {
  //     throw new NotFoundException(`Unable to delete. GRN with ID ${id} not found.`);
  //   }
  // }
}


