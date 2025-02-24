import { Department } from 'src/department/entities/department.entity';
import { Approvement } from 'src/approvement/entities/approvement.entity';

export class Employee {
  id: bigint;
  fullName: string;
  email: string;
  phone?: string;
  password: string;
  departmentId: bigint;
  department: Department;
  Department: Department[];
  Approvement: Approvement[];
  receivedApprovement: Approvement[];
}
