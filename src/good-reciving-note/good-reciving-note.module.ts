import { Module } from '@nestjs/common';
import { GoodRecivingNoteService } from './good-reciving-note.service';
import { GoodRecivingNoteController } from './good-reciving-note.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [GoodRecivingNoteController],
  providers: [GoodRecivingNoteService,PrismaService],
  // exports: [PrismaService],
})
export class GoodRecivingNoteModule {}
