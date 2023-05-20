import { CreateUserDto } from '@lib/user/application-services/commands/dto/create-user.dto';

export class CreateUserCommand {
  constructor(public readonly user: CreateUserDto) {}
}
