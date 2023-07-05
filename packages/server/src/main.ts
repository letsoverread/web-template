import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    exposedHeaders: ['Set-Cookie'],
    origin: '*',
  });
  await app.listen(process.env.PORT);
}
bootstrap();
