import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockInDto } from './dto/create-stock-in.dto';
import { UpdateStockInDto } from './dto/update-stock-in.dto'; // Ensure this is imported if updating stock in data
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StockInService {
  constructor(private prisma: PrismaService) {}

  // Create StockIn record
  async createStockIn(createStockInDto: CreateStockInDto) {
    const { quantity, unitPrice, totalPrice, sccId } = createStockInDto;
    
    // Create a new StockIn record using Prisma
    return await this.prisma.stockIn.create({
      data: {
        quantity,
        unitPrice,
        totalPrice,
        sccId,
      },
    });
  }

  // Get all StockIn records
  async getAllStockIn() {
    return await this.prisma.stockIn.findMany();
  }

  // Get a specific StockIn record by ID
  async getStockInById(id: number) {
    const stockIn = await this.prisma.stockIn.findUnique({
      where: { id },
    });

    if (!stockIn) {
      throw new NotFoundException('Stock In record not found');
    }

    return stockIn;
  }

  // Delete a specific StockIn record by ID
  async deleteStockIn(id: number) {
    const stockIn = await this.prisma.stockIn.findUnique({
      where: { id },
    });

    if (!stockIn) {
      throw new NotFoundException('Stock In record not found');
    }

    // Delete the StockIn record
    return await this.prisma.stockIn.delete({
      where: { id },
    });
  }

  // Update an existing StockIn record by ID
  async updateStockIn(id: number, updateStockInDto: UpdateStockInDto) {
    const { quantity, unitPrice, totalPrice, sccId } = updateStockInDto;

    const stockIn = await this.prisma.stockIn.findUnique({
      where: { id },
    });

    if (!stockIn) {
      throw new NotFoundException('Stock In record not found');
    }

    // Update the StockIn record
    return await this.prisma.stockIn.update({
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
