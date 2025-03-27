import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateSrnDto {
  @ApiProperty({
    description: 'Requisition work unit',
    example: 'Unit A',
  })
  @IsString()
  requisition_work_unit: string;  // Adjusted field name to match Prisma model

  @ApiProperty({
    description: 'Date of the SRN',
    type: Date,
    example: '2023-10-01T00:00:00.000Z',
  })
  @IsDate()
  date: Date;

  @ApiProperty({
    description: 'Approval ID (optional)',
    required: false,
    example: 1,
  })
  @IsOptional()
  @IsInt()
  approvment_id?: number;  // Adjusted field name to match Prisma model
}
