import { Global, Module } from '@nestjs/common';
import { PostModule } from '@lib/post';
import { UserModule } from '@lib/user';
import { AuthModule } from '@lib/auth';

@Global()
@Module({
  imports: [PostModule, UserModule, AuthModule],
  exports: [PostModule, UserModule, AuthModule],
})
export class DomainsModule {}
