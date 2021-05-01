import { Injectable } from '@nestjs/common';
import { Message } from '@zeroc/api';

@Injectable()
export class AppService {
  getHello(): Message {
    return { message: 'Welcome to Zero Commission' };
  }
}
