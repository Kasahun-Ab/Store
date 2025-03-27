import { ApiProperty } from "@nestjs/swagger";

export class CreateOutStockDto {
  @ApiProperty({ example: 1, description: 'ID of the item to be added to stock' })
  id: number;
}

