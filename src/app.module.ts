import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NovelSettingsModule } from './novel-settings/novel-settings.module';

@Module({
  imports: [NovelSettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
