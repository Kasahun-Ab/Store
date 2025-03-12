import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({
     data:{
       name:createItemDto.name,
        type_id:createItemDto.type_id,
        unit_measurement_id:createItemDto.unitMeasurement_id,
        
     }
    });
  }

  async findAll() {
    return this.prisma.item.findMany({
      include: {
        unit_measurement: true,
        type: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.item.findUnique({
      where: { id },
      // include: {
      //   unitMeasurement: true,
      //   type: true,
      // },
    });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({
      where: { id },
      data: updateItemDto,
    });
  }

  async remove(id: number) {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}