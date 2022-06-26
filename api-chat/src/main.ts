import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import * as morgan from 'morgan';

const logStream = fs.createWriteStream('api.log', {
  flags: 'a', // append
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api-chat');
  app.useGlobalPipes(new ValidationPipe());
  app.use(morgan('tiny', { stream: logStream }));
  await app.listen(3000);
}
bootstrap();
