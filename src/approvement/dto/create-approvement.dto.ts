import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateApprovementDto {
  @ApiProperty({
    description: 'The ID of the employee who prepared the approvement',
    example: 1,
  })
  @IsInt()
  prepared_by_id: number;

  @ApiProperty({
    description: 'The ID of the employee who checked the approvement',
    example: 2,
  })
  @IsInt()
  checked_by_id: number;

  @ApiProperty({
    description: 'The ID of the employee who received the approvement',
    example: 3,
  })
  @IsInt()
  received_by_id: number;
}
