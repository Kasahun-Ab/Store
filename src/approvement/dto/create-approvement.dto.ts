import { IsString, IsInt } from 'class-validator';

export class CreateApprovementDto {
  @IsString()
  description: string;

  @IsInt()
  checkedById: number;

  @IsInt()
  receivedById: number;
}
