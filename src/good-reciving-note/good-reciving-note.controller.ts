// src/grn/grn.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateGrnDto } from './dto/create-good-reciving-note.dto';
import { UpdateGrnDto } from './dto/update-good-reciving-note.dto';
import { GrnService } from './good-reciving-note.service';

@ApiTags('grn')
@Controller('grn')
export class GrnController {
  constructor(private readonly grnService: GrnService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Grn record' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  create(@Body() createGrnDto: CreateGrnDto) {
    return this.grnService.create(createGrnDto);
  }

  @Get()
  
  @ApiOperation({ summary: 'Get all Grn records' })
  @ApiResponse({ status: 200, description: 'List of all Grn records.' })
  findAll() {
    return this.grnService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Grn record by ID' })
  @ApiResponse({ status: 200, description: 'The found Grn record.' })
  findOne(@Param('id') id: string) {
    return this.grnService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Grn record by ID' })
  @ApiResponse({ status: 200, description: 'The updated Grn record.' })
  update(@Param('id') id: string, @Body() updateGrnDto: UpdateGrnDto) {
    return this.grnService.update(+id, updateGrnDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Grn record by ID' })
  @ApiResponse({ status: 200, description: 'The deleted Grn record.' })
  remove(@Param('id') id: string) {
    return this.grnService.remove(+id);
  }
}