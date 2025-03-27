import { Module } from '@nestjs/common';

import { OutStockService } from './out-stock.service';

import { OutStockController } from './out-stock.controller';

import { StockOutService } from 'src/stock-out/stock-out.service';

import { SccModule } from 'src/scc/scc.module';

import { SrnService } from 'src/srn/srn.service';
import { PrismaService } from 'prisma/prisma.service';
import { ReferanceSccService } from 'src/reference-scc/reference-scc.service';
import { StockBalanceService } from 'src/stock-balance/stock-balance.service';


@Module({
  controllers: [OutStockController],

  providers: [OutStockService,PrismaService,StockOutService,SrnService,ReferanceSccService,StockBalanceService],
  
  imports:[ SccModule]
})
export class OutStockModule {}
