// src/stock-balance/stock-balance.module.ts
import { Module } from '@nestjs/common';
import { StockBalanceService } from './stock-balance.service';
import { StockBalanceController } from './stock-balance.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [StockBalanceController],
  providers: [StockBalanceService, PrismaService],
})
export class StockBalanceModule {}