import { Module } from '@nestjs/common';
import { PostResolver, AuthResolver } from './resolvers-controllers';
import { AuthModule } from '@lib/auth';

@Module({
  imports: [AuthModule],
  providers: [PostResolver, AuthResolver],
})
export class ResolversModule {}
