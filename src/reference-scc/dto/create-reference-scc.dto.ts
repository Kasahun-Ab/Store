import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsDateString, IsEnum } from 'class-validator';
import { UnitMeasurement } from '@prisma/client'; // Import UnitMeasurement enum

export class CreateReferenceSccDto {
  @ApiProperty({ description: 'SCC ID' })
  @IsInt()
  sccId: number;

  @ApiProperty({ description: 'Date for the reference SCC' })
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'GRN ID for the reference SCC' })
  @IsInt()
  grnId: number;

  @ApiProperty({ description: 'IV Key for the reference SCC' })
  @IsInt()
  ivKey: number;

  @ApiProperty({ description: 'Unit measurement for the reference SCC' })
  @IsEnum(UnitMeasurement)
  unitMeasurement: UnitMeasurement;
}
