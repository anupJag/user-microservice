import * as env from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

env.config();

async function bootstrap() {
  const PORT = process?.env?.USER_SERVICE_PORT || 3001;

  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });
  await app.listen(PORT);
  console.info(`USER SERVICE APP RUNNING ON PORT: ${PORT}`);
}
bootstrap();
