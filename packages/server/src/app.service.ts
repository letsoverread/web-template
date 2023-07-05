import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testHelloWorld() {
    return 'Hello world!';
  }
}
