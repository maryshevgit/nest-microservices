import { Field, InputType } from '@nestjs/graphql';
import { IUser } from '@lib/user/domain';

@InputType()
export class CreateUserInput implements Omit<IUser, 'id' | 'createdAt'> {
  @Field()
  email: string;

  @Field()
  firstname: string;

  @Field()
  password: string;

  @Field()
  username: string;
}
