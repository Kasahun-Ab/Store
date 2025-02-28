import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateStockOutDto {
  @ApiProperty({ description: 'Quantity of items being stocked out', required: false })
  @IsInt()
  @Min(1)
  @IsOptional()
  quantity?: number;

  @ApiProperty({ description: 'Unit price of the stock out', required: false })
  @IsInt()
  @Min(0)
  @IsOptional()
  unitPrice?: number;

  @ApiProperty({ description: 'Total price of the stock out', required: false })
  @IsInt()
  @Min(0)
  @IsOptional()
  totalPrice?: number;

  @ApiProperty({ description: 'SCC ID for the stock out', required: false })
  @IsInt()
  @IsOptional()
  sccId?: number;
}
