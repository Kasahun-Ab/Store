import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AddtostockService } from './addtostock.service';
import { CreateAddtostockDto } from './dto/create-addtostock.dto';

@ApiTags('addtostock') // Grouping in Swagger
@Controller('addtostock')
export class AddtostockController {
  constructor(private readonly addtostockService: AddtostockService) {}

  @Post()
  @ApiOperation({ summary: 'Add to stock' })
  @ApiResponse({ status: 201, description: 'Item successfully added to stock' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiBody({ type: CreateAddtostockDto }) // Defines expected request body
  create(@Body() createAddtostockDto: CreateAddtostockDto) {
    return this.addtostockService.create(createAddtostockDto);
  }
}

//   @Get()
//   findAll() {
//     return this.addtostockService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.addtostockService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAddtostockDto: UpdateAddtostockDto) {
//     return this.addtostockService.update(+id, updateAddtostockDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.addtostockService.remove(+id);
//   }
// }
