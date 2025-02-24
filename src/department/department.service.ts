import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Injectable()
export class DepartmentService {
  private readonly logger = new Logger(DepartmentService.name);

  constructor(private prisma: PrismaService) {}

  async create(data: CreateDepartmentDto) {
    try {
      this.logger.log('Creating a new department');
      const department = await this.prisma.department.create({ data });
      return { ...department, id: department.id.toString(), "message": "Successfully created department" };
    } catch (error) {
      this.logger.error(`Failed to create department: ${error.message}`);
      throw new Error('Failed to create department');
    }
  }

  async findAll(skip?: number, take?: number) {
    try {
      this.logger.log('Retrieving all departments');
      const departments = await this.prisma.department.findMany({ skip, take });
      return departments.map(dept => ({ ...dept, id: dept.id.toString() }));
    } catch (error) {
      this.logger.error(`Failed to retrieve departments: ${error.message}`);
      throw new Error('Failed to retrieve departments');
    }
  }

  async findOne(id: string) {
    try {
      this.logger.log(`Retrieving department with id ${id}`);
      const department = await this.prisma.department.findUnique({
        where: { id: Number(id) }, // FIXED: Convert to number
      });

      if (!department) {
        throw new NotFoundException(`Department with id ${id} not found`);
      }

      return { ...department, id: department.id.toString() };
    } catch (error) {
      this.logger.error(`Failed to retrieve department: ${error.message}`);
      throw new Error('Failed to retrieve department');
    }
  }

  async update(id: string, data: UpdateDepartmentDto) {
    try {
      this.logger.log(`Updating department with id ${id}`);
      const department = await this.prisma.department.update({
        where: { id: Number(id) }, // FIXED: Convert to number
        data,
      });

      return { ...department, id: department.id.toString() };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Department with id ${id} not found`);
      }
      this.logger.error(`Failed to update department: ${error.message}`);
      throw new Error('Failed to update department');
    }
  }

  async remove(id: string) {
    try {
      this.logger.log(`Deleting department with id ${id}`);
      const department = await this.prisma.department.delete({
        where: { id: Number(id) }, // FIXED: Convert to number
      });

      return { ...department, id: department.id.toString() };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Department with id ${id} not found`);
      }
      this.logger.error(`Failed to delete department: ${error.message}`);
      throw new Error('Failed to delete department');
    }
  }
}
