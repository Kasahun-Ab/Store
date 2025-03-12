import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ description: 'Name of the item', example: 'Item 1' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'ID of the unit measurement', example: 1 })
  @IsInt()
  unitMeasurement_id: number;

  @ApiProperty({ description: 'ID of the item type', example: 1 })
  @IsInt()
  type_id: number;
}
