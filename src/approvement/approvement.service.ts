import { Injectable } from '@nestjs/common';
import { CreateApprovementDto } from './dto/create-approvement.dto';
import { UpdateApprovementDto } from './dto/update-approvement.dto';

@Injectable()
export class ApprovementService {
  create(createApprovementDto: CreateApprovementDto) {
    return 'This action adds a new approvement';
  }

  findAll() {
    return `This action returns all approvement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} approvement`;
  }

  update(id: number, updateApprovementDto: UpdateApprovementDto) {
    return `This action updates a #${id} approvement`;
  }

  remove(id: number) {
    return `This action removes a #${id} approvement`;
  }
}
