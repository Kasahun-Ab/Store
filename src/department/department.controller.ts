import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('departments')
@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new department' })
  @ApiBody({ type: CreateDepartmentDto })
  @ApiResponse({ status: 201, description: 'Department successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentService.create(createDepartmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all departments' })
  @ApiQuery({ name: 'skip', required: false, type: Number, description: 'Number of records to skip' })
  @ApiQuery({ name: 'take', required: false, type: Number, description: 'Number of records to take' })
  @ApiResponse({ status: 200, description: 'List of departments retrieved successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    return await this.departmentService.findAll(skip ? Number(skip) : undefined, take ? Number(take) : undefined);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific department by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Department ID' })
  @ApiResponse({ status: 200, description: 'Department retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Department not found' })
  async findOne(@Param('id') id: string) {
    return await this.departmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing department' })
  @ApiParam({ name: 'id', type: 'string', description: 'Department ID' })
  @ApiBody({ type: UpdateDepartmentDto })
  @ApiResponse({ status: 200, description: 'Department updated successfully' })
  @ApiResponse({ status: 404, description: 'Department not found' })
  async update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return await this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a department by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Department ID' })
  @ApiResponse({ status: 200, description: 'Department deleted successfully' })
  @ApiResponse({ status: 404, description: 'Department not found' })
  async remove(@Param('id') id: string) {
    return await this.departmentService.remove(id);
  }
}
