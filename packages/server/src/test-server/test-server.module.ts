import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestDatabaseEntity } from './test-server.entity';
import { TestServerService } from './test-server.service';
import { TestServerController } from './test-server.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TestDatabaseEntity])],
  providers: [TestServerService],
  controllers: [TestServerController],
})
export class TestServerModule {}
