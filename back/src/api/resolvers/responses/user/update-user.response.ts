import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IUser } from '@lib/user/domain';

@ObjectType()
export class UpdateUserResponse
  implements Omit<IUser, 'password' | 'createdAt'>
{
  @Field(() => ID, { description: 'ID поста' })
  id: string;

  @Field({ description: 'Email пользователя' })
  email: string;

  @Field({ description: 'Имя пользователя' })
  firstname: string;

  @Field({ description: 'Логин пользователя' })
  username: string;
}
