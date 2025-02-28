import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { ApprovementModule } from './approvement/approvement.module';
import { GoodRecivingNoteModule } from './good-reciving-note/good-reciving-note.module';
import { GrnitemModule } from './grnitem/grnitem.module';
import { SccModule } from './scc/scc.module';
import { ReferenceSccModule } from './reference-scc/reference-scc.module';
import { StockInModule } from './stock-in/stock-in.module';
import { StockOutModule } from './stock-out/stock-out.module';
import { StockBalanceModule } from './stock-balance/stock-balance.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [EmployeeModule, DepartmentModule, ApprovementModule, GoodRecivingNoteModule, GrnitemModule, SccModule, ReferenceSccModule, StockInModule, StockOutModule, StockBalanceModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
