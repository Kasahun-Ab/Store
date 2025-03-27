import { Module } from '@nestjs/common';
import { AddtostockService } from './addtostock.service';
import { AddtostockController } from './addtostock.controller';
import { SccService } from 'src/scc/scc.service';
import { GrnService } from 'src/good-reciving-note/good-reciving-note.service';
import { ReferanceSccService } from 'src/reference-scc/reference-scc.service';
import { StockBalanceService } from 'src/stock-balance/stock-balance.service';
import { StockInService } from 'src/stock-in/stock-in.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { NotficationsModule } from 'src/notfications/notfications.module';
import { NotificationsService } from 'src/notfications/notfications.service';
import { SccModule } from 'src/scc/scc.module';

@Module({
  controllers: [AddtostockController],
  providers: [AddtostockService,
    PrismaService,
    // SccService,
    ReferanceSccService,
    GrnService,
    StockInService,
    StockBalanceService],
    imports:[
    NotficationsModule,
    SccModule
    ]
  
   
})
export class AddtostockModule {}
