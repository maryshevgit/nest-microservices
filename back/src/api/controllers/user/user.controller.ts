import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserFacade } from '@lib/user/application-services';
import { UpdateUserDto } from './dto';
import { JwtGuard } from '@lib/auth/guards/jwt.guard';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserResponse } from './response';
import { CurrentUser, ICurrentUser } from '@lib/auth';

@ApiTags('users')
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userFacade: UserFacade) {}

  @ApiOperation({ summary: 'Обновление данных пользователя' })
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserResponse })
  @Patch()
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    return this.userFacade.commands.updateUser({
      ...updateUserDto,
      id: currentUser.userId,
    });
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @ApiBearerAuth()
  @ApiOkResponse({ type: Boolean })
  @Delete(':id')
  deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userFacade.commands.deleteUser(id);
  }
}
