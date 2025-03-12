import { Module } from '@nestjs/common';
import { SrnService } from './srn.service';
import { SrnController } from './srn.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SrnController],
  providers: [SrnService, PrismaService],
})
export class SrnModule {}
