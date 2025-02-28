import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmployeeService } from 'src/employee/employee.service'; // Import UsersService
import { JwtModule } from '@nestjs/jwt'; // JWT Module
import { EmployeeModule } from 'src/employee/employee.module'; // UsersModule (if required)
import { RolesDecorator } from './decorators/roles.decorator';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    EmployeeModule,
    PrismaModule,
    JwtModule.register({
    secret: 'store', // Replace with your secret key
    signOptions: { expiresIn: '60m' }, // Set JWT expiration time
  })],
  providers: [AuthService,EmployeeService],
  controllers: [AuthController],
})
export class AuthModule {}
