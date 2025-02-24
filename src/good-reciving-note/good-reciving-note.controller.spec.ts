import { Test, TestingModule } from '@nestjs/testing';
import { GoodRecivingNoteController } from './good-reciving-note.controller';
import { GoodRecivingNoteService } from './good-reciving-note.service';

describe('GoodRecivingNoteController', () => {
  let controller: GoodRecivingNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodRecivingNoteController],
      providers: [GoodRecivingNoteService],
    }).compile();

    controller = module.get<GoodRecivingNoteController>(GoodRecivingNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
