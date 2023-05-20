import { Controller } from '@nestjs/common';
import { UserFacade } from '@lib/user/application-services';

@Controller('users')
export class UserController {
  constructor(private readonly userFacade: UserFacade) {}
}
