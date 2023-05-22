import { UseGuards } from '@nestjs/common';
import { GqlGuard } from '@lib/auth/guards/gql.guard';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from '../../inputs';
import { UserFacade } from '@lib/user/application-services';
import { GqlCurrentUser, ICurrentUser } from '@lib/auth';
import { UpdateUserResponse } from '../../responses/user';

@UseGuards(GqlGuard)
@Resolver(() => UpdateUserResponse)
export class UserResolver {
  constructor(private readonly userFacade: UserFacade) {}

  @Mutation(() => UpdateUserResponse)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @GqlCurrentUser() currentUser: ICurrentUser,
  ) {
    return this.userFacade.commands.updateUser({
      ...updateUserInput,
      id: currentUser.userId,
    });
  }
}
