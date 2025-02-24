import { PartialType } from '@nestjs/swagger';
import { CreateGoodRecivingNoteDto } from './create-good-reciving-note.dto';

export class UpdateGoodRecivingNoteDto extends PartialType(CreateGoodRecivingNoteDto) {}
