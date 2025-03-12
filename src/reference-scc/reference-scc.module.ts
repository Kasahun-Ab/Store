// src/referance-scc/referance-scc.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ReferanceSccController } from './reference-scc.controller';
import { ReferanceSccService } from './reference-scc.service';

@Module({
  controllers: [ReferanceSccController],
  providers: [ReferanceSccService, PrismaService],
})
export class ReferanceSccModule {}