import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Adjust this path if needed
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import * as bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    // Hash the password before saving the employee
    const hashedPassword = await bcrypt.hash(createEmployeeDto.password, 10); // 10 is the salt rounds
    
    // Replace password with hashed password in the data
    const newEmployee = await this.prisma.employee.create({
      data: {
        ...createEmployeeDto,
        password: hashedPassword, // Save the hashed password
      },
    });

    return newEmployee;
  }

  async findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async findByEmail(email: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { email },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with email ${email} not found`);
    }
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    // Check if the password is being updated
    if (updateEmployeeDto.password) {
      // Hash the new password if provided
      updateEmployeeDto.password = await bcrypt.hash(updateEmployeeDto.password, 10);
    }

    const employee = await this.prisma.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async remove(id: number) {
    const employee = await this.prisma.employee.delete({
      where: { id },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return { message: `Employee with ID ${id} removed successfully` };
  }
}
