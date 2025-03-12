// src/grn/grn.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { GrnController } from './good-reciving-note.controller';
import { GrnService } from './good-reciving-note.service';


@Module({
  controllers: [GrnController],
  providers: [GrnService, PrismaService],
})
export class GrnModule {}