import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SrnService } from './srn.service';
import { CreateSrnDto } from './dto/create-srn.dto';
import { UpdateSrnDto } from './dto/update-srn.dto';

@ApiTags('Srn')
@Controller('srn')
export class SrnController {
  constructor(private readonly srnService: SrnService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new SRN' })
  @ApiResponse({ status: 201, description: 'Srn created successfully' })
  create(@Body() createSrnDto: CreateSrnDto) {
    return this.srnService.create(createSrnDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all SRNs' })
  findAll() {
    return this.srnService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific SRN' })
  findOne(@Param('id') id: string) {
    return this.srnService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an SRN' })
  update(@Param('id') id: string, @Body() updateSrnDto: UpdateSrnDto) {
    return this.srnService.update(+id, updateSrnDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an SRN' })
  remove(@Param('id') id: string) {
    return this.srnService.remove(+id);
  }
}
