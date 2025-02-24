import { Employee } from 'src/employee/entities/employee.entity';

export class Department {
  id: bigint;
  name: string;
  employees: Employee[];
}
