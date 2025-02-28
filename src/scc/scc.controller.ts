import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { SccService } from './scc.service';
import { CreateSccDto } from './dto/create-scc.dto';
import { UpdateSccDto } from './dto/update-scc.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SCC } from '@prisma/client'; // Import from Prisma

@ApiTags('SCC')
@Controller('scc')
export class SccController {
  constructor(private readonly sccService: SccService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new SCC' })
  @ApiResponse({ status: 201, description: 'SCC created successfully',  })
  async createScc(@Body() createSccDto: CreateSccDto): Promise<SCC> {
    return this.sccService.createScc(createSccDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all SCC records' })
  @ApiResponse({ status: 200, description: 'List of all SCC records',  })
  async getAllScc(): Promise<SCC[]> {
    return this.sccService.getAllScc();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an SCC by ID' })
  @ApiResponse({ status: 200, description: 'SCC details',  })
  @ApiResponse({ status: 404, description: 'SCC not found' })
  async getSccById(@Param('id', ParseIntPipe) id: number): Promise<SCC> {
    return this.sccService.getSccById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an SCC by ID' })
  @ApiResponse({ status: 200, description: 'SCC updated successfully',  })
  async updateScc(@Param('id', ParseIntPipe) id: number, @Body() updateSccDto: UpdateSccDto): Promise<SCC> {
    return this.sccService.updateScc(id, updateSccDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an SCC by ID' })
  @ApiResponse({ status: 200, description: 'SCC deleted successfully' })
  async deleteScc(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.sccService.deleteScc(id);
  }
}
