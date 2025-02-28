import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateStockOutDto } from './dto/create-stock-out.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateStockOutDto } from './dto/update-stock-out.dto';

@Injectable()
export class StockOutService {
  constructor(private prisma: PrismaService) {}

  async createStockOut(createStockOutDto: CreateStockOutDto) {
    const { quantity, unitPrice, totalPrice, sccId } = createStockOutDto;
    return await this.prisma.stockOut.create({
      data: {
        quantity,
        unitPrice,
        totalPrice,
        sccId,
      },
    });
  }

  async getAllStockOut() {
    return await this.prisma.stockOut.findMany();
  }

  async getStockOutById(id: number) {
    const stockOut = await this.prisma.stockOut.findUnique({
      where: { id },
    });

    if (!stockOut) {
      throw new NotFoundException('Stock Out record not found');
    }

    return stockOut;
  }

  async deleteStockOut(id: number) {
    const stockOut = await this.prisma.stockOut.findUnique({
      where: { id },
    });

    if (!stockOut) {
      throw new NotFoundException('Stock Out record not found');
    }

    return await this.prisma.stockOut.delete({
      where: { id },
    });
  }

  async updateStockOut(id: number, updateStockOutDto:UpdateStockOutDto) {
    const { quantity, unitPrice, totalPrice, sccId } = updateStockOutDto;

    const stockOut = await this.prisma.stockOut.findUnique({
      where: { id },
    });

    if (!stockOut) {
      throw new NotFoundException('Stock Out record not found');
    }

    return await this.prisma.stockOut.update({
      where: { id },
      data: {
        quantity,
        unitPrice,
        totalPrice,
        sccId,
      },
    });
  }
}
