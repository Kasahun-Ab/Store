import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsDateString, IsOptional, IsEnum } from 'class-validator';
import { UnitMeasurement } from '@prisma/client'; // Import UnitMeasurement enum

export class UpdateReferenceSccDto {
  @ApiProperty({ description: 'SCC ID', required: false })
  @IsInt()
  @IsOptional()
  sccId?: number;

  @ApiProperty({ description: 'Date for the reference SCC', required: false })
  @IsDateString()
  @IsOptional()
  date?: string;

  @ApiProperty({ description: 'GRN ID for the reference SCC', required: false })
  @IsInt()
  @IsOptional()
  grnId?: number;

  @ApiProperty({ description: 'IV Key for the reference SCC', required: false })
  @IsInt()
  @IsOptional()
  ivKey?: number;

  @ApiProperty({ description: 'Unit measurement for the reference SCC', required: false })
  @IsEnum(UnitMeasurement)
  @IsOptional()
  unitMeasurement?: UnitMeasurement;
}
