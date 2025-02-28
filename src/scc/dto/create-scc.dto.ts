import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, Min } from 'class-validator';

export class CreateSccDto {
  @ApiProperty({ description: 'Item name for the SCC' })
  @IsString()
  @IsNotEmpty()
  item: string;

  @ApiProperty({ description: 'Location of the shelf for the SCC' })
  @IsString()
  @IsNotEmpty()
  locationShelvesNo: string;

  @ApiProperty({ description: 'Max stock level for the item' })
  @IsInt()
  @Min(0)
  maxStockLevel: number;

  @ApiProperty({ description: 'Min stock level for the item' })
  @IsInt()
  @Min(0)
  minStockLevel: number;
}
