import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
  imports: [
    PrismaModule
  ],
})
export class ItemModule {}
