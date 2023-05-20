import { Field, InputType } from '@nestjs/graphql';
import { CreateUserDto } from '../../../controllers/auth/dto';

@InputType()
export class CreateUserInput implements CreateUserDto {
  @Field()
  email: string;

  @Field()
  firstname: string;

  @Field()
  password: string;

  @Field()
  username: string;
}
