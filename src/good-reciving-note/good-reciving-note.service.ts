import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateGrnDto } from './dto/create-good-reciving-note.dto';
import { UpdateGrnDto } from './dto/update-good-reciving-note.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { isAlphabetic } from 'src/utils/alpabetic-validation';

@Injectable()
export class GrnService {
  constructor(private prisma: PrismaService) {}
  async create(createGrnDto: CreateGrnDto) {
    // Validate DTO fields
    if (!createGrnDto.supplier || !isAlphabetic(createGrnDto.supplier)) {
      throw new BadRequestException('Supplier name must contain only alphabetic characters (A-Z, a-z).');
    }
    if (!createGrnDto.suppliers_inv_other_no || !isAlphabetic(createGrnDto.suppliers_inv_other_no)) {
      throw new BadRequestException('Supplier invoice/reference must contain only alphabetic characters (A-Z, a-z).');
    }
    if (!createGrnDto.store_location || !isAlphabetic(createGrnDto.store_location)) {
      throw new BadRequestException('Store location must contain only alphabetic characters (A-Z, a-z).');
    }
    if (!Number.isInteger(createGrnDto.purchase_req_num)) {
      throw new BadRequestException('Purchase requisition number must be an integer.');
    }
    if (!Number.isInteger(createGrnDto.purchase_order_num)) {
      throw new BadRequestException('Purchase order number must be an integer.');
    }
    if (createGrnDto.approvment_id !== undefined && !Number.isInteger(createGrnDto.approvment_id)) {
      throw new BadRequestException('Approval ID must be an integer if provided.');
    }
    // if (createGrnDto.refKey !== undefined && !Number.isInteger(createGrnDto.refKey)) {
    //   throw new BadRequestException('Reference key must be an integer if provided.');
    // }

    try {
      return await this.prisma.grn.create({
        data: createGrnDto,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException(`Database error: ${error.message}`);
      }
      throw new BadRequestException('Invalid data provided for GRN creation.');
    }
  }


  async findAll() {
    return this.prisma.grn.findMany();
    
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
        data: updateGrnDto,
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


