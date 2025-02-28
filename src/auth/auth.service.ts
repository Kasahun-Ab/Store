import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmployeeService } from 'src/employee/employee.service'; // Import EmployeeService to fetch employees
import { LoginDto } from './dto/login.dto'; // Import LoginDto for request validation
import { JwtService } from '@nestjs/jwt'; // For generating JWT tokens
import * as bcrypt from 'bcryptjs'; // For comparing hashed passwords

@Injectable()
export class AuthService {
  constructor(
    private readonly employeeService: EmployeeService, // Injecting EmployeeService for user management
    private readonly jwtService: JwtService, // Injecting JwtService for JWT token generation
  ) {}

  // Validate user credentials: Checks if email exists and password matches
  async validateUser(email: string, password: string) {
    try {
      const user = await this.employeeService.findByEmail(email); // Fetch user by email
      if (!user) {
        throw new UnauthorizedException('Invalid email or password'); // Handle invalid email
      }

      // Compare hashed password with input password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid email or password'); // Handle invalid password
      }

      return user; // Return the user if credentials match
    } catch (error) {
      throw new UnauthorizedException('Invalid email or password'); // Catch all errors and return a generic message
    }
  }

  // Generate JWT token
  async login(user: any) {
    try {
      const payload = { email: user.email, sub: user.role, name: user.name }; // JWT payload
      return {
        token: this.jwtService.sign(payload),
        fullname:user.name,
        email:user.email,
        userRole:user.role
        // Return the signed token
      };
    } catch (error) {
      throw new Error('Error generating JWT token: ' + error.message); // Handle errors appropriately
    }
  }
}
