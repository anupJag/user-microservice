import * as env from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

env.config();

const DB_SERVICE_URL =
  process?.env?.USER_DB_SERVICE || 'mongodb://localhost:27017/user';

@Module({
  imports: [
    MongooseModule.forRoot(DB_SERVICE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
