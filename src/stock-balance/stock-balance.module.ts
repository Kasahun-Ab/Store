import { Module } from '@nestjs/common';
import { StockBalanceService } from './stock-balance.service';
import { StockBalanceController } from './stock-balance.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [StockBalanceService,PrismaService],
  controllers: [StockBalanceController]
})
export class StockBalanceModule {}
