import { Test, TestingModule } from '@nestjs/testing';
import { NotficationsService } from './notfications.service';

describe('NotficationsService', () => {
  let service: NotficationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotficationsService],
    }).compile();

    service = module.get<NotficationsService>(NotficationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
