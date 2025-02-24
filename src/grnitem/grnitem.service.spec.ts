import { Test, TestingModule } from '@nestjs/testing';
import { GrnitemService } from './grnitem.service';

describe('GrnitemService', () => {
  let service: GrnitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrnitemService],
    }).compile();

    service = module.get<GrnitemService>(GrnitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
