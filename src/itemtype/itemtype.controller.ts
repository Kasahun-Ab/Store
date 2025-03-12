// src/item-type/item-type.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemTypeService } from './itemtype.service';
import { CreateItemTypeDto,  } from './dto/create-itemtype.dto';
import { UpdateItemtypeDto } from './dto/update-itemtype.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('item-type')
@Controller('item-type')
export class ItemTypeController {
  constructor(private readonly itemTypeService: ItemTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item type' })
  @ApiResponse({ status: 201, description: 'Item type created successfully.' })
  create(@Body() createItemTypeDto: CreateItemTypeDto) {
    return this.itemTypeService.create(createItemTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all item types' })
  @ApiResponse({ status: 200, description: 'List of all item types.' })
  findAll() {
    return this.itemTypeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an item type by ID' })
  @ApiResponse({ status: 200, description: 'Item type found.' })
  findOne(@Param('id') id: string) {
    return this.itemTypeService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an item type by ID' })
  @ApiResponse({ status: 200, description: 'Item type updated successfully.' })
  update(@Param('id') id: string, @Body() updateItemTypeDto: UpdateItemtypeDto) {
    return this.itemTypeService.update(+id, updateItemTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an item type by ID' })
  @ApiResponse({ status: 200, description: 'Item type deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.itemTypeService.remove(+id);
  }
}