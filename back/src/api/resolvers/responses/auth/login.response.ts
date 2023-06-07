import { Field, ObjectType } from '@nestjs/graphql';
import { CreateUserResponse } from './create-user.response';

@ObjectType()
export class LoginResponse extends CreateUserResponse {
  constructor() {
    super();
  }

  @Field({ description: 'Token пользователя' })
  token: string;
}
