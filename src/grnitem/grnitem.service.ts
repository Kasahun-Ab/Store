// grn-items.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateGrnItemDto } from './dto/create-grnitem.dto';



@Injectable()
export default class GrnItemsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateGrnItemDto) {
    return this.prisma.gRNItem.create({ data : data as any


     });
  }

  findAll() {
    return this.prisma.gRNItem.findMany();
  }

  findOne(id: number) {
    return this.prisma.gRNItem.findUnique({ where: { id } });
  }

  update(id: number, data: CreateGrnItemDto) {
    return this.prisma.gRNItem.update({ where: { id }, data: data as any });
  }

  remove(id: number) {
    return this.prisma.gRNItem.delete({ where: { id } });
  }
}