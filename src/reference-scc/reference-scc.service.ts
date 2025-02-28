import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateReferenceSccDto } from './dto/create-reference-scc.dto';
import { UpdateReferenceSccDto } from './dto/update-reference-scc.dto';

@Injectable()
export class ReferenceSccService {
  constructor(private prisma: PrismaService) {}

  async createReferenceScc(createReferenceSccDto: CreateReferenceSccDto) {
    const { sccId, grnId, ivKey, unitMeasurement, date } = createReferenceSccDto;
    return await this.prisma.referenceSCC.create({
      data: {
        sccId,
        grnId,
        ivKey,
        unitMeasurement,
        date,
      },
    });
  }

  async getAllReferenceScc() {
    return await this.prisma.referenceSCC.findMany();
  }

  async getReferenceSccById(id: number) {
    const referenceScc = await this.prisma.referenceSCC.findUnique({
      where: { id },
    });

    if (!referenceScc) {
      throw new NotFoundException('ReferenceSCC not found');
    }

    return referenceScc;
  }

  async updateReferenceScc(id: number, updateReferenceSccDto: UpdateReferenceSccDto) {
    const referenceScc = await this.prisma.referenceSCC.findUnique({
      where: { id },
    });

    if (!referenceScc) {
      throw new NotFoundException('ReferenceSCC not found');
    }

    return await this.prisma.referenceSCC.update({
      where: { id },
      data: updateReferenceSccDto,
    });
  }

  async deleteReferenceScc(id: number) {
    const referenceScc = await this.prisma.referenceSCC.findUnique({
      where: { id },
    });

    if (!referenceScc) {
      throw new NotFoundException('ReferenceSCC not found');
    }

    return await this.prisma.referenceSCC.delete({
      where: { id },
    });
  }
}
