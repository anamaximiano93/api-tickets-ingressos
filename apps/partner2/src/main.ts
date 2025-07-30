import { NestFactory } from '@nestjs/core';
import { Partner2Module } from './partner2.module';

async function bootstrap() {
  console.log('teste')
  const app = await NestFactory.create(Partner2Module);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
