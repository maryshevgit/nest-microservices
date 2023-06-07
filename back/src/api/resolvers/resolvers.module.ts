import { Module } from '@nestjs/common';
import {
  PostResolver,
  AuthResolver,
  UserResolver,
} from './resolvers-controllers';

@Module({
  providers: [PostResolver, AuthResolver, UserResolver],
})
export class ResolversModule {}
