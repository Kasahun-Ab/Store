import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { StockOutService } from './stock-out.service';
import { CreateStockOutDto } from './dto/create-stock-out.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StockOut } from '@prisma/client';
import { UpdateStockOutDto } from './dto/update-stock-out.dto';

@ApiTags('StockOut')
@Controller('stock-out')
export class StockOutController {
  constructor(private readonly stockOutService: StockOutService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new StockOut' })
  @ApiResponse({ status: 201, description: 'StockOut created successfully',})
  async createStockOut(@Body() createStockOutDto: CreateStockOutDto): Promise<StockOut> {
    return this.stockOutService.createStockOut(createStockOutDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all StockOut records' })
  @ApiResponse({ status: 200, description: 'List of all StockOut records', })
  async getAllStockOut(): Promise<StockOut[]> {
    return this.stockOutService.getAllStockOut();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a StockOut by ID' })
  @ApiResponse({ status: 200, description: 'StockOut details',})
  @ApiResponse({ status: 404, description: 'StockOut not found' })
  async getStockOutById(@Param('id', ParseIntPipe) id: number): Promise<StockOut> {
    return this.stockOutService.getStockOutById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a StockOut by ID' })
  @ApiResponse({ status: 200, description: 'StockOut updated successfully',})
  async updateStockOut(@Param('id', ParseIntPipe) id: number, @Body() updateStockOutDto: UpdateStockOutDto): Promise<StockOut> {
    return this.stockOutService.updateStockOut(id, updateStockOutDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a StockOut by ID' })
  @ApiResponse({ status: 200, description: 'StockOut deleted successfully' })
  async deleteStockOut(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.stockOutService.deleteStockOut(id);
  }
}
