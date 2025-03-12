import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateStoreIssueVoucherDto {
  @ApiProperty({ description: 'Issued to (Receiver of the voucher)', example: 'John Doe' })
  @IsString()
  issued_to: string;

  @ApiProperty({ description: 'Store request number', example: 101 })
  @IsInt()
  store_req_no: number;

  @ApiProperty({ description: 'Total ID (Optional)', example: 10, required: false })
  @IsOptional()
  @IsInt()
  total_id?: number;

  @ApiProperty({ description: 'Date of issue', example: '2024-03-10T00:00:00.000Z' })
  @IsDateString()
  date: Date;
}
