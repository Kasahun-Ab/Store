import { Test, TestingModule } from '@nestjs/testing';
import { GoodRecivingNoteService } from './good-reciving-note.service';

describe('GoodRecivingNoteService', () => {
  let service: GoodRecivingNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodRecivingNoteService],
    }).compile();

    service = module.get<GoodRecivingNoteService>(GoodRecivingNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
