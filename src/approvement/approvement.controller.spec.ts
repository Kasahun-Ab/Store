import { Test, TestingModule } from '@nestjs/testing';
import { ApprovementController } from './approvement.controller';
import { ApprovementService } from './approvement.service';

describe('ApprovementController', () => {
  let controller: ApprovementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprovementController],
      providers: [ApprovementService],
    }).compile();

    controller = module.get<ApprovementController>(ApprovementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
