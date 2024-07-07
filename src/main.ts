import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  await app.listen(config.get('PORT'));
}
bootstrap();

const hello = 'ndmc';

const hash = async (a: string) => {
  return await argon.hash(a);
};

const verify = async (a: string, hash: string) => {
  return await argon.verify(hash, a);
}