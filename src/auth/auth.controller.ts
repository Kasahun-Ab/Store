// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { RolesDecorator } from './decorators/roles.decorator';
import { Roles } from './roles.enum';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login and get JWT token' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'Successful login, JWT token returned',
    type: Object,
  })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('admin')
  @RolesDecorator(Roles.Admin) // Only users with the "admin" role can access this route
  @UseGuards(JwtAuthGuard, RolesGuard) // Apply both JwtAuthGuard and RolesGuard
  @ApiOperation({ summary: 'Access a route for Admins only' })
  @ApiResponse({
    status: 200,
    description: 'Admin route accessed successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getAdminRoute() {
    return { message: 'This is an admin-only route' };
  }

  @Post('store')
  @RolesDecorator(Roles.Storekeeper) // Only users with the "user" role can access this route
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Access a route for regular users only' })
  @ApiResponse({
    status: 200,
    description: 'User route accessed successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getUserRoute() {
    return { message: 'This is a user-only route' };
  }
}
