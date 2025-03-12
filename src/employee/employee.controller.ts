// src/employee/employee.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

// @UseGuards(JwtAuthGuard,RolesGuard)

@ApiTags('employee')
@Controller('employee')

export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()

// @Roles('admin')
  @ApiOperation({ summary: 'Create a new Employee record' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
 
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  // @Roles('admin')
  @ApiOperation({ summary: 'Get all Employee records' })
  @ApiResponse({ status: 200, description: 'List of all Employee records.' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  // @Roles('admin')
  @ApiOperation({ summary: 'Get an Employee record by ID' })
  @ApiResponse({ status: 200, description: 'The found Employee record.' })
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Put(':id')
  // @Roles('admin')
  @ApiOperation({ summary: 'Update an Employee record by ID' })
  @ApiResponse({ status: 200, description: 'The updated Employee record.' })
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  // @Roles('admin')
  @ApiOperation({ summary: 'Delete an Employee record by ID' })
  @ApiResponse({ status: 200, description: 'The deleted Employee record.' })
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}