import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('items') // Group endpoints under "items" in Swagger UI
@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item' })
  @ApiResponse({ status: 201, description: 'The item has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiBody({ type: CreateItemDto })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all items' })
  @ApiResponse({ status: 200, description: 'List of all items.' })
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an item by ID' })
  @ApiResponse({ status: 200, description: 'The item with the specified ID.' })
  @ApiResponse({ status: 404, description: 'Item not found.' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the item' })
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an item by ID' })
  @ApiResponse({ status: 200, description: 'The item has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Item not found.' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the item' })
  @ApiBody({ type: UpdateItemDto })
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id, updateItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an item by ID' })
  @ApiResponse({ status: 200, description: 'The item has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Item not found.' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the item' })
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}