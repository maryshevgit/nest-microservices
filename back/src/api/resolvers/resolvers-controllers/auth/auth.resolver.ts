import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserResponse, LoginResponse } from '../../responses';
import { CreateUserInput, LoginInput } from '../../inputs';
import { AuthService } from '@lib/auth';

@Resolver(() => CreateUserResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => CreateUserResponse)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.registerUser(createUserInput);
  }

  @Mutation(() => LoginResponse)
  async login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }
}
