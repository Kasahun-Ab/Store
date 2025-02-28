import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class CreateStockBalanceDto {
  @ApiProperty({ description: 'Quantity of items in stock balance' })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ description: 'Unit price of the stock balance' })
  @IsInt()
  @Min(0)
  unitPrice: number;

  @ApiProperty({ description: 'Total price of the stock balance' })
  @IsInt()
  @Min(0)
  totalPrice: number;

  @ApiProperty({ description: 'SCC ID for the stock balance' })
  @IsInt()
  sccId: number;
}
