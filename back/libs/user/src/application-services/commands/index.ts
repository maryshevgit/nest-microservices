import { ICommandHandler } from '@nestjs/cqrs';
import { Type } from '@nestjs/common';
import { CreateUserCommandHandler } from './create-user/create-user.command-handler';
import { UpdateUserCommandHandler } from './update-user/update-user.command-handler';
import { DeleteUserCommandHandler } from './delete-user/delete-user.command-handler';

export const USER_COMMANDS_HANDLER: Type<ICommandHandler>[] = [
  CreateUserCommandHandler,
  UpdateUserCommandHandler,
  DeleteUserCommandHandler,
];
