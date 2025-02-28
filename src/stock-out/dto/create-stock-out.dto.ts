import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateStockOutDto {
  @ApiProperty({ description: 'Quantity of items being stocked out' })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ description: 'Unit price of the stock out' })
  @IsInt()
  @Min(0)
  unitPrice: number;

  @ApiProperty({ description: 'Total price of the stock out' })
  @IsInt()
  @Min(0)
  totalPrice: number;

  @ApiProperty({ description: 'SCC ID for the stock out' })
  @IsInt()
  sccId: number;
}
