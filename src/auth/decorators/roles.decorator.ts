// src/auth/decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { Roles } from '../roles.enum'; // Import the Roles enum

export const RolesDecorator = (...roles: Roles[]) => SetMetadata('roles', roles);
