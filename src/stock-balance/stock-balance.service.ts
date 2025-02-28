import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockBalanceDto } from './dto/create-stock-balance.dto';
import { PrismaService } from 'prisma/prisma.service';
import { StockBalance } from '@prisma/client'; // Importing Prisma type for StockBalance

@Injectable()
export class StockBalanceService {
  constructor(private prisma: PrismaService) {}

  async createStockBalance(createStockBalanceDto: CreateStockBalanceDto): Promise<StockBalance> {
    const { quantity, unitPrice, totalPrice, sccId } = createStockBalanceDto;
    return await this.prisma.stockBalance.create({
      data: {
        quantity,
        unitPrice,
        totalPrice,
        sccId,
      },
    });
  }

  async getAllStockBalance(): Promise<StockBalance[]> {
    return await this.prisma.stockBalance.findMany();
  }

  async getStockBalanceById(id: number): Promise<StockBalance> {
    const stockBalance = await this.prisma.stockBalance.findUnique({
      where: { id },
    });

    if (!stockBalance) {
      throw new NotFoundException('Stock Balance not found');
    }

    return stockBalance;
  }

  async updateStockBalance(
    id: number, 
    updateData: Partial<CreateStockBalanceDto>
  ): Promise<StockBalance> {
    const existingStockBalance = await this.prisma.stockBalance.findUnique({
      where: { id },
    });

    if (!existingStockBalance) {
      throw new NotFoundException('Stock Balance not found');
    }

    return await this.prisma.stockBalance.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteStockBalance(id: number): Promise<StockBalance> {
    const stockBalance = await this.prisma.stockBalance.findUnique({
      where: { id },
    });

    if (!stockBalance) {
      throw new NotFoundException('Stock Balance not found');
    }

    return await this.prisma.stockBalance.delete({
      where: { id },
    });
  }
}
