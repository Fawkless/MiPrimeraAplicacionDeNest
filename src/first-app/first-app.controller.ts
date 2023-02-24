import { Controller, Get } from '@nestjs/common';
import { FirstAppService } from './first-app.service';

@Controller('first-app')
export class FirstAppController {
  constructor(private appService: FirstAppService) {}
  @Get()
  primerApp() {
    return this.appService.hello();
  }
}
