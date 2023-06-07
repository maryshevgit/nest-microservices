import { Field, InputType } from '@nestjs/graphql';
import { IUser } from '@lib/user/domain';

@InputType()
export class UpdateUserInput
  implements Partial<Omit<IUser, 'password' | 'createdAt'>>
{
  @Field({ nullable: true })
  firstname: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  email: string;
}
