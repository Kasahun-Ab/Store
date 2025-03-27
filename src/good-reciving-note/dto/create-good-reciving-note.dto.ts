import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsOptional, IsISO8601, IsArray, ValidateNested } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { CreateGrnItemDto } from '../../grnitem/dto/create-grnitem.dto';  // Importing the CreateGrnItemDto

export class CreateGrnDto {
  @ApiProperty({
    example: '2023-10-01T00:00:00.000Z',
    description: 'The date of the GRN (Goods Received Note)',
  })
  @IsISO8601()
  @Transform(({ value }) => new Date(value))
  date: Date;

  @ApiProperty({
    example: 'ABC Suppliers',
    description: 'The name of the supplier',
  })
  @IsString()
  supplier: string;

  @ApiProperty({
    example: 'INV12345',
    description: "The supplier's invoice or other reference number",
  })
  @IsString()
  suppliers_inv_other_no: string;

  @ApiProperty({
    example: 'Warehouse A',
    description: 'The location where the goods are stored',
  })
  @IsString()
  store_location: string;

  @ApiProperty({
    example: 1001,
    description: 'The purchase requisition number',
  })
  @IsInt()
  purchase_req_num: number;

  @ApiProperty({
    example: 2001,
    description: 'The purchase order number',
  })
  @IsInt()
  purchase_order_num: number;

  @ApiProperty({
    example: 3001,
    description: 'The approval ID (optional)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  prepared_by_id?: number;

  @ApiProperty({
    example: 5001,
    description: 'The total ID reference (optional)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  total_id?: number;

  @ApiProperty({
    type: [CreateGrnItemDto],  // Specify that this is an array of CreateGrnItemDto
    description: 'List of items included in the GRN',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateGrnItemDto)  // Convert each item in the array to an instance of CreateGrnItemDto
  grn_items: CreateGrnItemDto[];
}
