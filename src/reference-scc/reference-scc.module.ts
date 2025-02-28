import { Module } from '@nestjs/common';
import { ReferenceSccService } from './reference-scc.service';
import { PrismaService } from 'prisma/prisma.service';
import { ReferenceSccController } from './reference-scc.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule], 
  providers: [ReferenceSccService,PrismaService],
  controllers: [ReferenceSccController]
})
export class ReferenceSccModule {}
