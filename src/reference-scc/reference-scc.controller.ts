import { Controller, Post, Get, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ReferenceSccService } from './reference-scc.service';
import { CreateReferenceSccDto } from './dto/create-reference-scc.dto';
import { UpdateReferenceSccDto } from './dto/update-reference-scc.dto';
import { ReferenceSCC } from '@prisma/client';

@Controller('reference-scc')
export class ReferenceSccController {
  constructor(private readonly referenceSccService: ReferenceSccService) {}

  @Post()
  async create(@Body() createReferenceSccDto: CreateReferenceSccDto): Promise<ReferenceSCC> {
    return await this.referenceSccService.createReferenceScc(createReferenceSccDto);
  }

  @Get()
  async findAll(): Promise<ReferenceSCC[]> {
    return await this.referenceSccService.getAllReferenceScc();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ReferenceSCC> {
    return await this.referenceSccService.getReferenceSccById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReferenceSccDto: UpdateReferenceSccDto,
  ): Promise<ReferenceSCC> {
    return await this.referenceSccService.updateReferenceScc(id, updateReferenceSccDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<ReferenceSCC> {
    return await this.referenceSccService.deleteReferenceScc(id);
  }
}
