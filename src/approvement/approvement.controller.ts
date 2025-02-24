import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApprovementService } from './approvement.service';
import { CreateApprovementDto } from './dto/create-approvement.dto';
import { UpdateApprovementDto } from './dto/update-approvement.dto';

@Controller('approvement')
export class ApprovementController {
  constructor(private readonly approvementService: ApprovementService) {}

  @Post()
  create(@Body() createApprovementDto: CreateApprovementDto) {
    return this.approvementService.create(createApprovementDto);
  }

  @Get()
  findAll() {
    return this.approvementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.approvementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApprovementDto: UpdateApprovementDto) {
    return this.approvementService.update(+id, updateApprovementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.approvementService.remove(+id);
  }
}
