import { Test, TestingModule } from '@nestjs/testing';
import { NovelSettingsService } from './novel-settings.service';

describe('NovelSettingsService', () => {
  let service: NovelSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovelSettingsService],
    }).compile();

    service = module.get<NovelSettingsService>(NovelSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
