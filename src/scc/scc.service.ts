import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateSccDto } from './dto/create-scc.dto';
import { UpdateSccDto } from './dto/update-scc.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SccService {
  constructor(private prisma: PrismaService) {}

  async createScc(createSccDto: CreateSccDto) {
    const { item, locationShelvesNo, maxStockLevel, minStockLevel } = createSccDto;
    return await this.prisma.sCC.create({
      data: {
        item,
        locationShelvesNo,
        maxStockLevel,
        minStockLevel,
      },
    });
  }

  async getAllScc() {
    return await this.prisma.sCC.findMany();
  }

  async getSccById(id: number) {
    const scc = await this.prisma.sCC.findUnique({
      where: { id },
    });

    if (!scc) {
      throw new NotFoundException('SCC not found');
    }

    return scc;
  }

  async updateScc(id: number, updateSccDto: UpdateSccDto) {
    const { item, locationShelvesNo, maxStockLevel, minStockLevel } = updateSccDto;
    const scc = await this.prisma.sCC.findUnique({ where: { id } });

    if (!scc) {
      throw new NotFoundException('SCC not found');
    }

    return await this.prisma.sCC.update({
      where: { id },
      data: {
        item: item || scc.item,
        locationShelvesNo: locationShelvesNo || scc.locationShelvesNo,
        maxStockLevel: maxStockLevel || scc.maxStockLevel,
        minStockLevel: minStockLevel || scc.minStockLevel,
      },
    });
  }

  async deleteScc(id: number) {
    const scc = await this.prisma.sCC.findUnique({ where: { id } });

    if (!scc) {
      throw new NotFoundException('SCC not found');
    }

    return await this.prisma.sCC.delete({
      where: { id },
    });
  }
}
