import { PartialType } from '@nestjs/swagger';
import { CreateGrnItemDto } from './create-grnitem.dto';


export class UpdateGrnitemDto extends PartialType(CreateGrnItemDto) {}
