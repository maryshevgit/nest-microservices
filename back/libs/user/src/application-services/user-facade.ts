import { Injectable } from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from './commands/dto/create-user.dto';
import { CreateUserCommand } from '@lib/user/application-services/commands/create-user/create-user.command';
import { CreateUserCommandHandler } from '@lib/user/application-services/commands/create-user/create-user.command-handler';

@Injectable()
export class UserFacade {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}

  commands = {
    createUser: (user: CreateUserDto) => this.createUser(user),
  };

  queries = {};

  events = {};

  private createUser(user: CreateUserDto) {
    return this.commandBus.execute<
      CreateUserCommand,
      CreateUserCommandHandler['execute']
    >(new CreateUserCommand(user));
  }
}
