import { Test, TestingModule } from '@nestjs/testing';
import { NovelSettingsController } from './novel-settings.controller';

describe('NovelSettingsController', () => {
  let controller: NovelSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovelSettingsController],
    }).compile();

    controller = module.get<NovelSettingsController>(NovelSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
