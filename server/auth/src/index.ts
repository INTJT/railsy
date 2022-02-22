import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { PORT } from './config';

async function setupAuthMicroservice() {
  const app = await NestFactory.create(AuthServiceModule, {
    cors: true,
  });
  await app.listen(PORT);
  return app;
}

setupAuthMicroservice()
  .then(() => console.info(`Auth service is listening on ${PORT} port`))
  .catch(console.error);
