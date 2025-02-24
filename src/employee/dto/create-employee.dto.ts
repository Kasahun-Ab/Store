import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsInt } from 'class-validator';

export class CreateEmployeeDto {
  
  @ApiProperty({ description: 'Full name of the employee' })
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'Email address of the employee', example: 'employee@example.com' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ description: 'Phone number of the employee', example: '+1234567890' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'Password for the employee account' })
  @IsString()
  password: string;

  @ApiProperty({ description: 'Department ID to which the employee belongs', example: 1 })
  @IsInt()
  departmentId: number;
}
