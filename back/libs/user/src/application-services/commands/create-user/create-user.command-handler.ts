import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';
import { CreateUserCommand } from '@lib/user/application-services/commands/create-user/create-user.command';
import { UserAggregate } from '@lib/user/domain';
import { UserRepository } from '@lib/user/providers';
import * as bcrypt from 'bcrypt';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand, UserAggregate>
{
  constructor(private readonly userRepository: UserRepository) {}
  async execute({ user }: CreateUserCommand): Promise<UserAggregate> {
    const existEmail = await this.userRepository.findByEmail(user.email);
    if (existEmail)
      throw new BadRequestException(
        'Пользователь с таким email уже существует',
      );

    const existUsername = await this.userRepository.findByUsername(
      user.username,
    );
    if (existUsername)
      throw new BadRequestException(
        'Пользователь с таким username уже существует',
      );

    user.password = await bcrypt.hash(user.password, 10);

    const userAggregate = UserAggregate.create(user);
    const createdUser = await this.userRepository
      .save(userAggregate)
      .catch((err) => {
        throw new BadRequestException(err);
      });
    return createdUser;
  }
}
