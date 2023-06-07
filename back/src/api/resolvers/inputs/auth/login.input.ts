import { Field, InputType } from '@nestjs/graphql';
import { LoginDto } from '../../../controllers/auth/dto';

@InputType()
export class LoginInput implements LoginDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
