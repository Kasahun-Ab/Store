import { Test, TestingModule } from '@nestjs/testing';
import { OutStockService } from './out-stock.service';

describe('OutStockService', () => {
  let service: OutStockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutStockService],
    }).compile();

    service = module.get<OutStockService>(OutStockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
