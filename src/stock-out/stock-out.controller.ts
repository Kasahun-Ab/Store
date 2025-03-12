import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StockOutService } from './stock-out.service';
import { CreateStockOutDto } from './dto/create-stock-out.dto';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Stock Out')
@Controller('stock-out')
export class StockOutController {
  constructor(private readonly stockOutService: StockOutService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Stock Out created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createStockOutDto: CreateStockOutDto) {
    return this.stockOutService.create(createStockOutDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of all Stock Out records.' })
  findAll() {
    return this.stockOutService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Stock Out ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Stock Out record found.' })
  @ApiResponse({ status: 404, description: 'Stock Out record not found.' })
  findOne(@Param('id') id: string) {
    return this.stockOutService.findOne(+id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'Stock Out ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Stock Out updated successfully.' })
  @ApiResponse({ status: 404, description: 'Stock Out record not found.' })
  update(@Param('id') id: string, @Body() updateStockOutDto: CreateStockOutDto) {
    return this.stockOutService.update(+id, updateStockOutDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Stock Out ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Stock Out deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Stock Out record not found.' })
  remove(@Param('id') id: string) {
    return this.stockOutService.remove(+id);
  }
}