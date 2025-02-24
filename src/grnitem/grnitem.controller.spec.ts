import { Test, TestingModule } from '@nestjs/testing';
import { GrnitemController } from './grnitem.controller';
import { GrnitemService } from './grnitem.service';

describe('GrnitemController', () => {
  let controller: GrnitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrnitemController],
      providers: [GrnitemService],
    }).compile();

    controller = module.get<GrnitemController>(GrnitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
