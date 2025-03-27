import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateGrnDto } from './dto/create-good-reciving-note.dto';
import { UpdateGrnDto } from './dto/update-good-reciving-note.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { isAlphabetic } from 'src/utils/alpabetic-validation';
import {  NotificationsGateway } from 'src/notfications/notfications.gateway';

@Injectable()
export class GrnService {
  constructor(
    private prisma: PrismaService,
    private readonly notificationsGateway: NotificationsGateway,

  ) {}
  

  
  async create(createGrnDto: CreateGrnDto) {
    console.log(createGrnDto);
    const { grn_items, ...grnData } = createGrnDto;

    if (!createGrnDto.supplier || !isAlphabetic(createGrnDto.supplier)) {
      throw new BadRequestException('Supplier name must contain only alphabetic characters (A-Z, a-z).');
    }
    if (!Number.isInteger(createGrnDto.purchase_req_num) || !Number.isInteger(createGrnDto.purchase_order_num)) {
      throw new BadRequestException('Purchase requisition and order numbers must be integers.');
    }
    if (createGrnDto.prepared_by_id !== undefined && !Number.isInteger(createGrnDto.prepared_by_id)) {
      throw new BadRequestException('Approval ID must be an integer if provided.');
    }

    try {
      let total = grn_items.reduce((sum, item) => sum + item.qua_delivered * item.unit_price, 0);
      const totalData = await this.prisma.total.create({ data: { total_price: total } });
      const approvement = await this.prisma.approvement.create({ data: { prepared_by_id: grnData.prepared_by_id } });

      const grn = await this.prisma.grn.create({
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

      for (const grnItem of grn_items) {
        await this.prisma.grnItem.create({
          data: {
            grn_id: grn.id,
            ser_no: 1,
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
      }

      await this.notifyStockRoles(grn.id);
      return grn;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(`Database error: ${error.message}`);
      }
      throw new BadRequestException('Invalid data provided for GRN creation.');
    }
  }



  private async notifyStockRoles(grnId: number) {
    const stockAdminRole = await this.prisma.role.findUnique({ where: { role: 'stock-admin' } });
    const stockManagerRole = await this.prisma.role.findUnique({ where: { role: 'stock-manager' } });

    if (!stockAdminRole || !stockManagerRole) {
      throw new Error('Roles not found');
    }

    const stockAdmins = await this.prisma.employee.findMany({ where: { role_id: stockAdminRole.id } });
    const stockManagers = await this.prisma.employee.findMany({ where: { role_id: stockManagerRole.id } });

    for (const admin of stockAdmins) {
      // await this.notificationsService.createNotification(admin.id, 'New GRN created', grnId);
      this.sendNotification(admin.id, 'New GRN created', grnId);
    }
    for (const manager of stockManagers) {
      // await this.notificationsService.createNotification(manager.id, 'New GRN created', grnId);
      this.sendNotification(manager.id, 'New GRN created', grnId);
    }
  }

  private sendNotification(userId: number, message: string, grnId: number) {
    this.notificationsGateway.sendNotificationToEmployee(userId, message);
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
            unit_measurement:true
          },

          
        },
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

  async remove(id: number) {
    if (!Number.isInteger(id)) {
      throw new BadRequestException('ID must be an integer.');
    }

    try {
      return await this.prisma.grn.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Unable to delete. GRN with ID ${id} not found.`);
    }
  }
}


