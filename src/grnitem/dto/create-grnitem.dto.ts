import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateGrnItemDto {
  @ApiProperty({
    description: 'The serial number of the item',
    type: Number,
    example: 1,
  })
  @IsInt()
  serNo: number;

  @ApiProperty({
    description: 'A brief description of the item',
    type: String,
    example: 'Laptop',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Unit of measurement for the item',
    type: String,
    example: 'pcs',
  })
  @IsString()
  unitMeasurement: string;

  @ApiProperty({
    description: 'The quantity ordered for the item',
    type: Number,
    example: 50,
  })
  @IsInt()
  quantityOrdered: number;

  @ApiProperty({
    description: 'The quantity delivered for the item',
    type: Number,
    example: 50,
  })
  @IsInt()
  quantityDelivered: number;

  @ApiProperty({
    description: 'The quantity received for the item',
    type: Number,
    example: 50,
  })
  @IsInt()
  quantityReceived: number;

  @ApiProperty({
    description: 'The unit price of the item',
    type: Number,
    example: 500,
  })
  @IsInt()
  unitPrice: number;

  @ApiProperty({
    description: 'The total price for the item (unitPrice * quantityReceived)',
    type: Number,
    example: 25000,
  })
  @IsInt()
  totalItemPrice: number;

  @ApiProperty({
    description: 'Additional remarks about the item',
    type: String,
    example: 'No issues with the item',
    required: false,
  })
  @IsString()
  remark: string;

  @ApiProperty({
    description: 'The ID of the associated GRN',
    type: Number,
    example: 1,
  })
  @IsInt()
  grnId: number; // The field for the related GRN

}
