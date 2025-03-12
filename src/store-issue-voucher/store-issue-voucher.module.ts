import { Module } from '@nestjs/common';
import { StoreIssueVoucherService } from './store-issue-voucher.service';
import { StoreIssueVoucherController } from './store-issue-voucher.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  controllers: [StoreIssueVoucherController,],
  providers: [StoreIssueVoucherService,],
  imports: [
    PrismaModule
  ],
})
export class StoreIssueVoucherModule {}
