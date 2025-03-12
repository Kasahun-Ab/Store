// src/stock-balance/stock-balance.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateStockBalanceDto } from './dto/create-stock-balance.dto';
import { UpdateStockBalanceDto } from './dto/update-stock-balance.dto';

@Injectable()
export class StockBalanceService {
  constructor(private prisma: PrismaService) {}

  async create(createStockBalanceDto: CreateStockBalanceDto) {
    return this.prisma.stockBalance.create({
      data: createStockBalanceDto,
    });
  }

  async findAll() {
    return this.prisma.stockBalance.findMany();
  }

  async findOne(id: number) {
    return this.prisma.stockBalance.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStockBalanceDto: UpdateStockBalanceDto) {
    return this.prisma.stockBalance.update({
      where: { id },
      data: updateStockBalanceDto,
    });
  }

  async remove(id: number) {
    return this.prisma.stockBalance.delete({
      where: { id },
    });
  }
}