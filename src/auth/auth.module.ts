import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmployeeService } from 'src/employee/employee.service'; // Import EmployeeService
import { JwtModule } from '@nestjs/jwt'; // JWT Module
import { EmployeeModule } from 'src/employee/employee.module'; // Import EmployeeModule
import { PrismaModule } from 'prisma/prisma.module';
import { JwtStrategy } from './jwt.strategy';

import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [
    forwardRef(() => EmployeeModule), // Use forwardRef to import EmployeeModule
    PrismaModule,
    JwtModule.register({
      secret: 'store',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy, EmployeeService, RolesGuard],
  controllers: [AuthController],
  exports: [AuthService],// Export AuthService if it's used in other modules
})
export class AuthModule {}