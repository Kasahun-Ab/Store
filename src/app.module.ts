import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { ApprovementModule } from './approvement/approvement.module';

import { SccModule } from './scc/scc.module';

import { StockInModule } from './stock-in/stock-in.module';
import { StockOutModule } from './stock-out/stock-out.module';
import { StockBalanceModule } from './stock-balance/stock-balance.module';
import { AuthModule } from './auth/auth.module';
import { GrnItemModule } from './grnitem/grnitem.module';
import { ReferanceSccModule } from './reference-scc/reference-scc.module';
import { GrnModule } from './good-reciving-note/good-reciving-note.module';
import { UnitmesurmentModule } from './unitmesurment/unitmesurment.module';
import { ItemtypeModule } from './itemtype/itemtype.module';
import { RoleModule } from './role/role.module';
import { ItemModule } from './item/item.module';
import { SrnModule } from './srn/srn.module';
import { SrnItemModule } from './srn-item/srn-item.module';
import { StoreIssueVoucherModule } from './store-issue-voucher/store-issue-voucher.module';
import { StoreIssueVoucherItemModule } from './store-issue-voucher-item/store-issue-voucher-item.module';

@Module({
  imports: [EmployeeModule, DepartmentModule, ApprovementModule, GrnModule,GrnItemModule , SccModule,ReferanceSccModule , StockInModule, StockOutModule, StockBalanceModule, AuthModule, UnitmesurmentModule, ItemtypeModule, RoleModule, ItemModule, SrnModule, SrnItemModule, StoreIssueVoucherModule, StoreIssueVoucherItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
