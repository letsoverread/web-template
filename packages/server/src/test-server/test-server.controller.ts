import { Controller, Get } from '@nestjs/common';
import { TestServerService } from './test-server.service';

@Controller('test')
export class TestServerController {
  constructor(private readonly testServerService: TestServerService) {}
  @Get('server')
  testAPI() {
    return this.testServerService.testServerResponse();
  }
}
