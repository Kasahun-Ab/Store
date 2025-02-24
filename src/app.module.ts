import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { ApprovementModule } from './approvement/approvement.module';
import { GoodRecivingNoteModule } from './good-reciving-note/good-reciving-note.module';
import { GrnitemModule } from './grnitem/grnitem.module';

@Module({
  imports: [EmployeeModule, DepartmentModule, ApprovementModule, GoodRecivingNoteModule, GrnitemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
