import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from '@lib/user/application-services/commands/delete-user/delete-user.command';
import { UserRepository } from '@lib/user/providers';
import { BadRequestException, Logger } from '@nestjs/common';
import { ApiError } from '@lib/errors';

@CommandHandler(DeleteUserCommand)
export class DeleteUserCommandHandler
  implements ICommandHandler<DeleteUserCommand, boolean>
{
  private readonly logger = new Logger(DeleteUserCommandHandler.name);
  constructor(private readonly userRepository: UserRepository) {}
  async execute({ id }: DeleteUserCommand): Promise<boolean> {
    const existUser = await this.userRepository.findOne(id).catch((err) => {
      this.logger.error(err);
      return false;
    });
    if (!existUser) throw new BadRequestException(ApiError.USER_NOT_FOUND);
    const isDeleteUser = await this.userRepository.delete(id).catch((err) => {
      throw new Error(err);
    });
    return isDeleteUser;
  }
}
