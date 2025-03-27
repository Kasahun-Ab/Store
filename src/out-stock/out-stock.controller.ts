import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OutStockService } from './out-stock.service';
import { CreateOutStockDto } from './dto/create-out-stock.dto';
import { UpdateOutStockDto } from './dto/update-out-stock.dto';

@Controller('out-stock')
export class OutStockController {
  constructor(private readonly outStockService: OutStockService) {}

  @Post()
  create(@Body() createOutStockDto: CreateOutStockDto) {
    return this.outStockService.create(createOutStockDto);
  }

}
