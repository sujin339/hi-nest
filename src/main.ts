import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// // 유효성 검사
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 리퀘스트할 때마다 실제 타입으로 변환됨
    })
  );
  await app.listen(3000);
}
bootstrap();
