// src/stock-in/stock-in.module.ts
import { Module } from '@nestjs/common';
import { StockInService } from './stock-in.service';
import { StockInController } from './stock-in.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [StockInController],
  providers: [StockInService, PrismaService,],
})
export class StockInModule {}