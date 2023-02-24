import { Module } from '@nestjs/common';
import { FirstAppService } from './first-app.service';
import { FirstAppController } from './first-app.controller';

@Module({
  providers: [FirstAppService],
  controllers: [FirstAppController],
})
export class FirstAppModule {}
