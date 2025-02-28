import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { StockInService } from './stock-in.service';
import { CreateStockInDto } from './dto/create-stock-in.dto';

import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StockIn } from '@prisma/client';
import { UpdateStockInDto } from './dto/update-stock-in.dto';

@ApiTags('StockIn')
@Controller('stock-in')
export class StockInController {
  constructor(private readonly stockInService: StockInService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new StockIn' })
  @ApiResponse({ status: 201, description: 'StockIn created successfully',  })
  async createStockIn(@Body() createStockInDto: CreateStockInDto): Promise<StockIn> {
    return this.stockInService.createStockIn(createStockInDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all StockIn records' })
  @ApiResponse({ status: 200, description: 'List of all StockIn records', })
  async getAllStockIn(): Promise<StockIn[]> {
    return this.stockInService.getAllStockIn();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a StockIn by ID' })
  @ApiResponse({ status: 200, description: 'StockIn details',  })
  @ApiResponse({ status: 404, description: 'StockIn not found' })
  async getStockInById(@Param('id', ParseIntPipe) id: number): Promise<StockIn> {
    return this.stockInService.getStockInById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a StockIn by ID' })
  @ApiResponse({ status: 200, description: 'StockIn updated successfully',  })
  async updateStockIn(@Param('id', ParseIntPipe) id: number, @Body() updateStockInDto: UpdateStockInDto): Promise<StockIn> {
    return this.stockInService.updateStockIn(id, updateStockInDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a StockIn by ID' })
  @ApiResponse({ status: 200, description: 'StockIn deleted successfully' })
  async deleteStockIn(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.stockInService.deleteStockIn(id);
  }
}
