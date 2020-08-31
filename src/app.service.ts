import { Injectable } from '@nestjs/common';
import { APP } from './app.config';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello ${APP.NAME}!`;
  }
}
