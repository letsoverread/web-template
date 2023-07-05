import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestServerModule } from './test-server/test-server.module';
import { TestDatabaseEntity } from './test-server/test-server.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234567890',
      database: 'project_database',
      entities: [TestDatabaseEntity],
      synchronize: true,
    }),
    TestServerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
