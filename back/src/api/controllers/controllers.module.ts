import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from '@lib/auth';

@Module({
  imports: [AuthModule],
  controllers: [PostController, UserController, AuthController],
})
export class ControllersModule {}
