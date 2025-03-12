// src/approvement/approvement.controller.ts
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
import { ApprovementService } from './approvement.service';
import { CreateApprovementDto } from './dto/create-approvement.dto';
import { UpdateApprovementDto } from './dto/update-approvement.dto';

@ApiTags('approvement')
@Controller('approvement')
export class ApprovementController {
  constructor(private readonly approvementService: ApprovementService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Approvement record' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  create(@Body() createApprovementDto: CreateApprovementDto) {
    return this.approvementService.create(createApprovementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Approvement records' })
  @ApiResponse({ status: 200, description: 'List of all Approvement records.' })
  findAll() {
    return this.approvementService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an Approvement record by ID' })
  @ApiResponse({ status: 200, description: 'The found Approvement record.' })
  findOne(@Param('id') id: string) {
    return this.approvementService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an Approvement record by ID' })
  @ApiResponse({ status: 200, description: 'The updated Approvement record.' })
  update(@Param('id') id: string, @Body() updateApprovementDto: UpdateApprovementDto) {
    return this.approvementService.update(+id, updateApprovementDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an Approvement record by ID' })
  @ApiResponse({ status: 200, description: 'The deleted Approvement record.' })
  remove(@Param('id') id: string) {
    return this.approvementService.remove(+id);
  }
}