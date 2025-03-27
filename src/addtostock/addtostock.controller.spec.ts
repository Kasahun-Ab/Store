import { Test, TestingModule } from '@nestjs/testing';
import { AddtostockController } from './addtostock.controller';
import { AddtostockService } from './addtostock.service';

describe('AddtostockController', () => {
  let controller: AddtostockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddtostockController],
      providers: [AddtostockService],
    }).compile();

    controller = module.get<AddtostockController>(AddtostockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
