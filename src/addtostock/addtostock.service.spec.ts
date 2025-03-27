import { Test, TestingModule } from '@nestjs/testing';
import { AddtostockService } from './addtostock.service';

describe('AddtostockService', () => {
  let service: AddtostockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddtostockService],
    }).compile();

    service = module.get<AddtostockService>(AddtostockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
