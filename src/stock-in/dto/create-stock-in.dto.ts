import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateStockInDto {
  @ApiProperty({ description: 'Quantity of items being stocked in' })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ description: 'Unit price of the stock in' })
  @IsInt()
  @Min(0)
  unitPrice: number;

  @ApiProperty({ description: 'Total price of the stock in' })
  @IsInt()
  @Min(0)
  totalPrice: number;

  @ApiProperty({ description: 'SCC ID for the stock in' })
  @IsInt()
  sccId: number;
}
