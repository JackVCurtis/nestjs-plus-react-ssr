import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BlogController } from './blog.controller';

@Module({
  imports: [],
  controllers: [AppController, BlogController],
  providers: [],
})
export class AppModule {}
