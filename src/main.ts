import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP } from './app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP.PORT);
  console.log(`server is listening at ${await app.getUrl()}`);
}
bootstrap();
