import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  private employees = [];

  create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = { id: this.employees.length + 1, ...createEmployeeDto };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  findAll() {
    return this.employees;
  }

  findOne(id: number) {
    const employee = this.employees.find((emp) => emp.id === id);
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeIndex = this.employees.findIndex((emp) => emp.id === id);
    if (employeeIndex === -1) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    this.employees[employeeIndex] = { ...this.employees[employeeIndex], ...updateEmployeeDto };
    return this.employees[employeeIndex];
  }

  remove(id: number) {
    const employeeIndex = this.employees.findIndex((emp) => emp.id === id);
    if (employeeIndex === -1) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    this.employees.splice(employeeIndex, 1);
    return { message: `Employee with ID ${id} removed successfully` };
  }
}
