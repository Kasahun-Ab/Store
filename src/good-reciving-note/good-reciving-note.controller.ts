import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoodRecivingNoteService } from './good-reciving-note.service';
import { CreateGoodRecivingNoteDto } from './dto/create-good-reciving-note.dto';
import { UpdateGoodRecivingNoteDto } from './dto/update-good-reciving-note.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('good-reciving-note')
@Controller('good-reciving-note')
export class GoodRecivingNoteController {
  constructor(private readonly goodRecivingNoteService: GoodRecivingNoteService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Goods Receiving Note' })
  @ApiResponse({ status: 201, description: 'Successfully created a GRN' })
  create(@Body() createGrnDto: CreateGoodRecivingNoteDto) {
    return this.goodRecivingNoteService.create(createGrnDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all Goods Receiving Notes' })
  @ApiResponse({ status: 200, description: 'List of all GRNs' })
  findAll() {
    return this.goodRecivingNoteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single Goods Receiving Note by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'GRN ID' })
  @ApiResponse({ status: 200, description: 'GRN found' })
  @ApiResponse({ status: 404, description: 'GRN not found' })
  findOne(@Param('id') id: string) {
    return this.goodRecivingNoteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing Goods Receiving Note' })
  @ApiParam({ name: 'id', type: 'number', description: 'GRN ID' })
  @ApiResponse({ status: 200, description: 'Successfully updated GRN' })
  update(@Param('id') id: string, @Body() updateGrnDto: UpdateGoodRecivingNoteDto) {
    return this.goodRecivingNoteService.update(+id, updateGrnDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Goods Receiving Note' })
  @ApiParam({ name: 'id', type: 'number', description: 'GRN ID' })
  @ApiResponse({ status: 200, description: 'Successfully deleted GRN' })
  remove(@Param('id') id: string) {
    return this.goodRecivingNoteService.remove(+id);
  }
}
