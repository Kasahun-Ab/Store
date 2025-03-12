import { ApiProperty } from '@nestjs/swagger';

export class CreateSccDto {
  @ApiProperty({
    description: 'Name of the item (References Item.name)',
    example: 'Item A',
  })
  item: string;

  @ApiProperty({
    description: 'Location shelves number',
    example: 'Shelf 1',
  })
  location_shelves_no: string;  // Adjusted field name to match Prisma model

  @ApiProperty({
    description: 'Maximum stock level',
    example: 100,
  })
  max_stock_level: number;  // Adjusted field name to match Prisma model

  @ApiProperty({
    description: 'Minimum stock level',
    example: 10,
  })
  min_stock_level: number;  // Adjusted field name to match Prisma model

  @ApiProperty({
    description: 'Reference key',
    example: 12345,
  })
  referance_key: number;  // Adjusted field name to match Prisma model
}
