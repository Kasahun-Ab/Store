import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { StockBalanceService } from './stock-balance.service';
import { CreateStockBalanceDto } from './dto/create-stock-balance.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StockBalance } from '@prisma/client';
import { UpdateStockBalanceDto } from './dto/update-stock-balance.dto';

@ApiTags('StockBalance')
@Controller('stock-balance')
export class StockBalanceController {
  constructor(private readonly stockBalanceService: StockBalanceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new StockBalance' })
  @ApiResponse({ status: 201, description: 'StockBalance created successfully', })
  async createStockBalance(@Body() createStockBalanceDto: CreateStockBalanceDto): Promise<StockBalance> {
    return this.stockBalanceService.createStockBalance(createStockBalanceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all StockBalance records' })
  @ApiResponse({ status: 200, description: 'List of all StockBalance records',  })
  async getAllStockBalance(): Promise<StockBalance[]> {
    return this.stockBalanceService.getAllStockBalance();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a StockBalance by ID' })
  @ApiResponse({ status: 200, description: 'StockBalance details', })
  @ApiResponse({ status: 404, description: 'StockBalance not found' })
  async getStockBalanceById(@Param('id', ParseIntPipe) id: number): Promise<StockBalance> {
    return this.stockBalanceService.getStockBalanceById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a StockBalance by ID' })
  @ApiResponse({ status: 200, description: 'StockBalance updated successfully', })
  async updateStockBalance(@Param('id', ParseIntPipe) id: number, @Body() updateStockBalanceDto: UpdateStockBalanceDto): Promise<StockBalance> {
    return this.stockBalanceService.updateStockBalance(id, updateStockBalanceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a StockBalance by ID' })
  @ApiResponse({ status: 200, description: 'StockBalance deleted successfully', })
  async deleteStockBalance(@Param('id', ParseIntPipe) id: number): Promise<StockBalance> {
    return this.stockBalanceService.deleteStockBalance(id);
  }
}
