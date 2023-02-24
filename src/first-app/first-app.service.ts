import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstAppService {
  hello(): string {
    return 'Este es mi primera aplicación en Nest';
  }
}
