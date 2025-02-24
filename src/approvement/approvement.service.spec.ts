import { Test, TestingModule } from '@nestjs/testing';
import { ApprovementService } from './approvement.service';

describe('ApprovementService', () => {
  let service: ApprovementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApprovementService],
    }).compile();

    service = module.get<ApprovementService>(ApprovementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
