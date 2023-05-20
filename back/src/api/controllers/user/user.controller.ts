import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserFacade } from '@lib/user/application-services';

@Controller('users')
export class UserController {
  constructor(private readonly userFacade: UserFacade) {}

  @Post('create-user')
  createUser(@Body() dto: CreateUserDto) {
    return this.userFacade.commands.createUser(dto);
  }
}
