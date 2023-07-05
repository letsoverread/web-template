import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestDatabaseEntity } from './test-server.entity';

@Injectable()
export class TestServerService {
  constructor(
    @InjectRepository(TestDatabaseEntity)
    private readonly testDatabaseRepository: Repository<TestDatabaseEntity>,
  ) {}
  async testServerResponse() {
    await this.testDatabaseRepository.save({
      id: 1,
      message: 'Hello there!',
    });
    const message = await this.testDatabaseRepository.findOne({
      where: {
        id: 1,
      },
    });
    return `Hey! If you see this message, it means that the server is working well at http://localhost:${process.env.PORT} and PostgreSQL database is connected. The message from database is "id: ${message.id}, message: ${message.message}"`;
  }

  async testDatabaseResponse() {}
}
