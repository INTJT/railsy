import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './api';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
  ],
  exports: [
  ],
})
export class AuthServiceModule {}
