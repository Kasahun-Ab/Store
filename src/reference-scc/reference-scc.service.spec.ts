import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceSccService } from './reference-scc.service';

describe('ReferenceSccService', () => {
  let service: ReferenceSccService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferenceSccService],
    }).compile();

    service = module.get<ReferenceSccService>(ReferenceSccService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
