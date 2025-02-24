import { PartialType } from '@nestjs/swagger';
import { CreateApprovementDto } from './create-approvement.dto';

export class UpdateApprovementDto extends PartialType(CreateApprovementDto) {}
