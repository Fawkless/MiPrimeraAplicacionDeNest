import { Module } from '@nestjs/common';
import { FirstAppModule } from './first-app/first-app.module';

@Module({
  imports: [FirstAppModule],
})
export class AppModule {}
