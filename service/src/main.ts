import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // ログレベルの設定
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  // グローバルロガーの設定
  const logger = new Logger('Bootstrap');
  logger.log('アプリケーションを起動中');

  await app.listen(4000);
  logger.log(`アプリケーションは http://localhost:4000 で起動しました`);
}
bootstrap();
