import { Global, Module } from '@nestjs/common';
import { PostModule } from '@lib/post';
import { UserModule } from '@lib/user';

@Global()
@Module({
  imports: [PostModule, UserModule],
  exports: [PostModule, UserModule],
})
export class DomainsModule {}
