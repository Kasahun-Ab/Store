import { ApiProperty } from '@nestjs/swagger';

export class CreateAddtostockDto {
  @ApiProperty({ example: 1, description: 'ID of the item to be added to stock' })
  id: number;
}
