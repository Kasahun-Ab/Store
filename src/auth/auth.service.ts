import {
  Injectable,
  Inject,
  forwardRef,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => EmployeeService)) // Use forwardRef for circular dependency
    private readonly employeeService: EmployeeService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      // Fetch user including the password field
      const user = await this.employeeService.findByEmailWithPassword(email);

      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }

      // Compare provided password with stored hash
      const isPasswordValid = await bcrypt.compare(password, user.password).catch(() => false);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid email or password');
      }

      // Exclude password before returning user
      const { password: _, ...result } = user;
      return result;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException(`Failed to validate user: ${error.message}`);
    }
  }

  async login(user: any): Promise<{ token: string; fullname: string; email: string; userRole: string }> {
    try {
      const payload = {
        email: user.email,
        sub: user.id,
        role: user.role?.role, // Handle possible null/undefined role
        name: user.name,
      };

      const token = this.jwtService.sign(payload);

      return {
        token,
        fullname: user.name,
        email: user.email,
        userRole: user.role?.role ?? 'user', // Default role if undefined
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to generate JWT token.');
    }
  }
}
