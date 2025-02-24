import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateGrnItemDto } from './dto/create-grnitem.dto';
import GrnItemsService from './grnitem.service';



@ApiTags('GRN Items')
@Controller('grn-items')
export default class GrnItemsController {
  constructor(private readonly grnItemsService: GrnItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a GRN item' })
  @ApiResponse({ status: 201, description: 'GRN item created successfully.' })
  async create(@Body() createGrnItemDto: CreateGrnItemDto) {
    return this.grnItemsService.create(createGrnItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all GRN items' })
  @ApiResponse({ status: 200, description: 'List of all GRN items.' })
  async findAll() {
    return this.grnItemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a GRN item by ID' })
  @ApiResponse({ status: 200, description: 'GRN item retrieved successfully.' })
  async findOne(@Param('id') id: string) {
    return this.grnItemsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a GRN item' })
  @ApiResponse({ status: 200, description: 'GRN item updated successfully.' })
  async update(@Param('id') id: string, @Body() updateGrnItemDto: CreateGrnItemDto) {
    return this.grnItemsService.update(+id, updateGrnItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a GRN item' })
  @ApiResponse({ status: 200, description: 'GRN item deleted successfully.' })
  async remove(@Param('id') id: string) {
    return this.grnItemsService.remove(+id);
  }
}
