import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreIssueVoucherService } from './store-issue-voucher.service';
import { CreateStoreIssueVoucherDto } from './dto/create-store-issue-voucher.dto';
import { UpdateStoreIssueVoucherDto } from './dto/update-store-issue-voucher.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('StoreIssueVoucher')
@Controller('store-issue-voucher')
export class StoreIssueVoucherController {
  constructor(private readonly storeIssueVoucherService: StoreIssueVoucherService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new store issue voucher' })
  @ApiResponse({ status: 201, description: 'Store issue voucher created successfully' })
  create(@Body() createStoreIssueVoucherDto: CreateStoreIssueVoucherDto) {
    return this.storeIssueVoucherService.create(createStoreIssueVoucherDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all store issue vouchers' })
  @ApiResponse({ status: 200, description: 'List of store issue vouchers' })
  findAll() {
    return this.storeIssueVoucherService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a store issue voucher by ID' })
  @ApiResponse({ status: 200, description: 'Store issue voucher found' })
  @ApiResponse({ status: 404, description: 'Store issue voucher not found' })
  findOne(@Param('id') id: string) {
    return this.storeIssueVoucherService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a store issue voucher by ID' })
  @ApiResponse({ status: 200, description: 'Store issue voucher updated successfully' })
  update(@Param('id') id: string, @Body() updateStoreIssueVoucherDto: UpdateStoreIssueVoucherDto) {
    return this.storeIssueVoucherService.update(+id, updateStoreIssueVoucherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a store issue voucher by ID' })
  @ApiResponse({ status: 200, description: 'Store issue voucher deleted successfully' })
  remove(@Param('id') id: string) {
    return this.storeIssueVoucherService.remove(+id);
  }
}
