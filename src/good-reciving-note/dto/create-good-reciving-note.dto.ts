import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateGoodRecivingNoteDto {
  @ApiProperty({ example: '2024-02-20T10:00:00Z', description: 'Date of the Goods Receiving Note' })
  @IsString()
  date: string;

  @ApiProperty({ example: 'Supplier XYZ', description: 'Name of the supplier' })
  @IsString()
  supplier: string;

  @ApiProperty({ example: 'INV12345', description: 'Supplier invoice number' })
  @IsString()
  suppliersInvOtherNo: string;

  @ApiProperty({ example: 'Main Warehouse', description: 'Store location where goods are received' })
  @IsString()
  storeLocation: string;

  @ApiProperty({ example: 1001, description: 'Purchase request number' })
  @IsNumber()
  purchaseReqNum: number;

  @ApiProperty({ example: 2002, description: 'Purchase order number' })
  @IsNumber()
  purchaseOrderNum: number;

  @ApiPropertyOptional({ example: 1, description: 'Approval ID (optional)' })
  @IsOptional()
  @IsNumber()
  approvementId?: number;
}
