// src/unit-measurement/unit-measurement.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

import { UnitMeasurementService } from './unitmesurment.service';

import { CreateUnitMeasurementDto } from './dto/create-unitmesurment.dto';

import { UpdateUnitMeasurementDto } from './dto/update-unitmesurment.dto';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('unit-measurement')
@Controller('unit-measurement')

export class UnitMeasurementController {
  constructor(private readonly unitMeasurementService: UnitMeasurementService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new unit of measurement' })
  @ApiResponse({ status: 201, description: 'Unit of measurement created successfully.' })
  create(@Body() createUnitMeasurementDto: CreateUnitMeasurementDto) {
    return this.unitMeasurementService.create(createUnitMeasurementDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all units of measurement' })
  @ApiResponse({ status: 200, description: 'List of all units of measurement.' })
  findAll() {
    return this.unitMeasurementService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a unit of measurement by ID' })
  @ApiResponse({ status: 200, description: 'Unit of measurement found.' })
  findOne(@Param('id') id: string) {
    return this.unitMeasurementService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a unit of measurement by ID' })
  @ApiResponse({ status: 200, description: 'Unit of measurement updated successfully.' })
  update(@Param('id') id: string, @Body() updateUnitMeasurementDto: UpdateUnitMeasurementDto) {
    return this.unitMeasurementService.update(+id, updateUnitMeasurementDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a unit of measurement by ID' })
  @ApiResponse({ status: 200, description: 'Unit of measurement deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.unitMeasurementService.remove(+id);
  }
}