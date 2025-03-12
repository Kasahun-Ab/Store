import { Injectable, CanActivate, ExecutionContext, ForbiddenException, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from 'prisma/prisma.service'; // Import PrismaService

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(
    private reflector: Reflector,
    private prisma: PrismaService, // Use Prisma to fetch the user role dynamically
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Get the required roles from the route handler or controller using the Reflector
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      // If no roles are required, allow access
      return true;
    }

    // Extract the request object
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Extract user from JWT or session

  
    if (!user) {
      this.logger.warn('User not found in request');
      throw new ForbiddenException('User not found in request');
    }

    if (!user.sub) {
      this.logger.warn(`Missing user ID in request.user: ${JSON.stringify(user)}`);
      throw new ForbiddenException('Missing user ID');
    }

    try {
      // Fetch the latest user role from the database using Prisma
      const employee = await this.prisma.employee.findUnique({
        where: { id: user.userId },
        select: { role: true },
      });
      this.logger.log(`Employee: ${JSON.stringify(employee)}`);
  

      if (!employee || !employee.role) {
        this.logger.warn(`User role not found for user ID: ${user.sub}`);
        throw new ForbiddenException('User role not found');
      }

      // Check if the user's role is included in the required roles
      if (!requiredRoles.includes(employee.role.role)) {
        this.logger.warn(`User with role ${employee.role} attempted to access a restricted resource`);
        throw new ForbiddenException('You do not have permission to access this resource');
      }

      // If the user has the required role, allow access
      return true;
    } catch (error) {
      this.logger.error(`Error fetching user role: ${error.message}`);
      throw new ForbiddenException('Unable to verify user role');
    }
  }
}