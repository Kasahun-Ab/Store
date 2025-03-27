import { Module } from '@nestjs/common';
import { SccService } from './scc.service';
import { SccController } from './scc.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule], 
  providers: [PrismaService,SccService],
  controllers: [SccController],
  exports: [SccService]

})
export class SccModule {}
