import { Injectable } from '@nestjs/common';
import { CreateGoodRecivingNoteDto } from './dto/create-good-reciving-note.dto';
import { UpdateGoodRecivingNoteDto } from './dto/update-good-reciving-note.dto';
import { PrismaService } from 'prisma/prisma.service';
import { transformBigInt } from '../utils/bigint-transform';

@Injectable()
export class GoodRecivingNoteService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGoodRecivingNoteDto) {
    return this.prisma.gRN.create({ data }).then(transformBigInt);
  }

  async findAll() {
    const grns = await this.prisma.gRN.findMany({
      include: { grnItems: true, totalGrns: true, approvement: true },
    });
    return transformBigInt(grns);
  }

  async findOne(id: number) {
    const grn = await this.prisma.gRN.findUnique({
      where: { id },
      include: { grnItems: true, totalGrns: true, approvement: true },
    });
    return transformBigInt(grn);
  }

  async update(id: number, data: UpdateGoodRecivingNoteDto) {
    return this.prisma.gRN.update({
      where: { id },
      data,
    }).then(transformBigInt);
  }

  async remove(id: number) {
    return this.prisma.gRN.delete({ where: { id } }).then(transformBigInt);
  }
}
