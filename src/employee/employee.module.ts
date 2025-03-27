import { Module, forwardRef } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaService } from 'prisma/prisma.service';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule

@Module({
  imports: [forwardRef(() => AuthModule)], // Use forwardRef to import AuthModule
  controllers: [EmployeeController],
  providers: [EmployeeService, PrismaService],
  exports: [EmployeeService], 
  
})
export class EmployeeModule {}