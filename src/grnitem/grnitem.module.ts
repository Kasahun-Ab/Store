import { Module } from '@nestjs/common';

import   GrnItemsController  from './grnitem.controller';
import GrnItemsService from './grnitem.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [GrnItemsController],
  providers: [GrnItemsService,PrismaService],
})
export class GrnitemModule {}
