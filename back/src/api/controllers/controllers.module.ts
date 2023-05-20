import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [PostController, UserController],
})
export class ControllersModule {}
