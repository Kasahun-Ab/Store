import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceSccController } from './reference-scc.controller';

describe('ReferenceSccController', () => {
  let controller: ReferenceSccController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenceSccController],
    }).compile();

    controller = module.get<ReferenceSccController>(ReferenceSccController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
