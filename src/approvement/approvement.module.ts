// src/approvement/approvement.module.ts
import { Module } from '@nestjs/common';
import { ApprovementService } from './approvement.service';
import { ApprovementController } from './approvement.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ApprovementController],
  providers: [ApprovementService, PrismaService],
})
export class ApprovementModule {}