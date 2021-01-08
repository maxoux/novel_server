import { Module } from '@nestjs/common';
import { NovelSettingsController } from './novel-settings.controller';
import { NovelSettingsService } from './novel-settings.service';

@Module({
    controllers: [NovelSettingsController],
    providers: [NovelSettingsService]
})
export class NovelSettingsModule {}
