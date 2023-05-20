import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IUser } from '@lib/user/domain';

@ObjectType()
export class CreateUserResponse implements IUser {
  @Field(() => ID, { description: 'ID поста' })
  id: string;

  @Field({ description: 'Email пользователя' })
  email: string;

  @Field({ description: 'Имя пользователя' })
  firstname: string;

  @Field({ description: 'Пароль пользователя' })
  password: string;

  @Field({ description: 'Логин пользователя' })
  username: string;

  @Field({ description: 'Дата создания пользователя' })
  createdAt: string;
}
