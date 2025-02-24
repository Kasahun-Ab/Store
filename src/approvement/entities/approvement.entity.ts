import { Employee } from 'src/employee/entities/employee.entity';

export class Approvement {
  id: bigint;
  description: string;
  checkedBy: Employee;
  receivedBy: Employee;
}
