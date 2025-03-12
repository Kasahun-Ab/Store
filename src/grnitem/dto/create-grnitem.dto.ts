import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateGrnItemDto {
  @ApiProperty({ example: 101, description: 'GRN ID this item belongs to' })
  @IsInt()
  @IsPositive()
  grn_id: number;

  @ApiProperty({ example: 1, description: 'Serial number of the item in the GRN' })
  @IsInt()
  @IsPositive()
  ser_no: number;

  @ApiProperty({ example: 1, description: 'Item ID this description belongs to' })
  @IsInt()
  @IsPositive()
  description: number;  // The description now refers to the Item ID

  @ApiProperty({ example: 2, description: 'Unit of measurement ID (e.g., kilograms, liters, etc.)' })
  @IsInt()
  @IsPositive()
  unit_measurement_id: number;

  @ApiProperty({ example: 50, description: 'Quantity ordered' })
  @IsInt()
  @IsPositive()
  qua_ordered: number;

  @ApiProperty({ example: 45, description: 'Quantity delivered' })
  @IsInt()
  @IsPositive()
  qua_delivered: number;

  @ApiProperty({ example: 45, description: 'Quantity received' })
  @IsInt()
  @IsPositive()
  quantity_received: number;

  @ApiProperty({ example: 20.5, description: 'Unit price of the item' })
  @IsNumber()
  unit_price: number;

  @ApiProperty({ example: 922.5, description: 'Total item price (quantity_received * unit_price)' })
  @IsNumber()
  total_item_price: number;

  @ApiPropertyOptional({ example: 'Received in good condition', description: 'Optional remarks for the item' })
  @IsString()
  @IsOptional()
  remark?: string;
}
