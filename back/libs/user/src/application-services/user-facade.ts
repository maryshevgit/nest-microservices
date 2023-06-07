import { Injectable } from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from './commands/dto/create-user.dto';
import { CreateUserCommand } from '@lib/user/application-services/commands/create-user/create-user.command';
import { CreateUserCommandHandler } from '@lib/user/application-services/commands/create-user/create-user.command-handler';
import { UpdateUserDto } from '@lib/user/application-services/commands/dto';
import { UpdateUserCommand } from '@lib/user/application-services/commands/update-user/update-user.command';
import { UpdateUserCommandHandler } from '@lib/user/application-services/commands/update-user/update-user.command-handler';
import { DeleteUserCommand } from '@lib/user/application-services/commands/delete-user/delete-user.command';
import { DeleteUserCommandHandler } from '@lib/user/application-services/commands/delete-user/delete-user.command-handler';

@Injectable()
export class UserFacade {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}

  commands = {
    createUser: (user: CreateUserDto) => this.createUser(user),
    updateUser: (user: UpdateUserDto) => this.updateUser(user),
    deleteUser: (id: string) => this.deleteUser(id),
  };

  queries = {};

  events = {};

  private createUser(user: CreateUserDto) {
    return this.commandBus.execute<
      CreateUserCommand,
      CreateUserCommandHandler['execute']
    >(new CreateUserCommand(user));
  }

  private updateUser(user: UpdateUserDto) {
    return this.commandBus.execute<
      UpdateUserCommand,
      UpdateUserCommandHandler['execute']
    >(new UpdateUserCommand(user));
  }

  private deleteUser(id: string) {
    return this.commandBus.execute<
      DeleteUserCommand,
      DeleteUserCommandHandler['execute']
    >(new DeleteUserCommand(id));
  }
}
