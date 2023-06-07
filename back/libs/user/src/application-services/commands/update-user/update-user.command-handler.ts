import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserAggregate } from '@lib/user/domain';
import { UserRepository } from '@lib/user/providers';
import { BadRequestException, Logger } from '@nestjs/common';
import { UpdateUserCommand } from '@lib/user/application-services/commands/update-user/update-user.command';
import { ApiError } from '@lib/errors';

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand, UserAggregate>
{
  private readonly logger = new Logger(UpdateUserCommandHandler.name);

  constructor(private readonly userRepository: UserRepository) {}
  async execute({ user }: UpdateUserCommand): Promise<UserAggregate | null> {
    const existUser = await this.userRepository
      .findOne(user.id)
      .catch((err) => {
        this.logger.error(err);
        return null;
      });
    if (!existUser) throw new BadRequestException(ApiError.USER_NOT_FOUND);
    Object.assign(existUser, user);
    const userAggregate = UserAggregate.create(existUser);
    return this.userRepository.save(userAggregate);
  }
}
