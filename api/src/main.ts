import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = Number(process.env.PORT ?? 3000);
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(port);
  console.log(`your aplikasi runing in http://localhost:${port}`);
  console.log(
    `your database runing in http://localhost:${process.env.DB_PORT}`,
  );
  console.log(`database : ${process.env.DB_NAME}`);
  console.log(`username : ${process.env.DB_USERNAME}`);
  console.log(`password : ${process.env.DB_PASSWORD}`);
}
void bootstrap();
