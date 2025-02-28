import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsOptional, Min } from 'class-validator';

export class UpdateSccDto {
  @ApiProperty({ description: 'Item name for the SCC', required: false })
  @IsString()
  @IsOptional()
  item?: string;

  @ApiProperty({ description: 'Location of the shelf for the SCC', required: false })
  @IsString()
  @IsOptional()
  locationShelvesNo?: string;

  @ApiProperty({ description: 'Max stock level for the item', required: false })
  @IsInt()
  @Min(0)
  @IsOptional()
  maxStockLevel?: number;

  @ApiProperty({ description: 'Min stock level for the item', required: false })
  @IsInt()
  @Min(0)
  @IsOptional()
  minStockLevel?: number;
}
