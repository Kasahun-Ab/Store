import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

import { RolesGuard } from './guards/roles.guard';

import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { JwtStrategy } from './jwt.strategy';

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
 // Only users with the "admin" role can access this route
  @UseGuards(JwtStrategy, RolesGuard) // Apply both JwtAuthGuard and RolesGuard
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
 // Only users with the "storekeeper" role can access this route
  @UseGuards(JwtStrategy, RolesGuard)
  @ApiOperation({ summary: 'Access a route for storekeepers only' })
  @ApiResponse({
    status: 200,
    description: 'Storekeeper route accessed successfully',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getStorekeeperRoute() {
    return { message: 'This is a storekeeper-only route' };
  }
}