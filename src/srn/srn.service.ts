import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSrnDto } from './dto/create-srn.dto';
import { UpdateSrnDto } from './dto/update-srn.dto';

@Injectable()
export class SrnService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSrnDto: CreateSrnDto) {
    return this.prisma.srn.create({ data: createSrnDto });
  }

  async findAll() {
    return this.prisma.srn.findMany({ include: { approvement: true, srn_items: true } });
  }

  async findOne(id: number) {
    const srn = await this.prisma.srn.findUnique({ where: { id }, include: { approvement: true, srn_items: true } });
    if (!srn) throw new NotFoundException(`Srn with ID ${id} not found`);
    return srn;
  }

  async update(id: number, updateSrnDto: UpdateSrnDto) {
    return this.prisma.srn.update({ where: { id }, data: updateSrnDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.srn.delete({ where: { id } });
  }
}
