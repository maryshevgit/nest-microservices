import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@lib/auth';
import { CreateUserDto, LoginDto } from './dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthResponse } from './response';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Регистрация пользователя' })
  @ApiOkResponse({ type: CreateUserDto })
  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return await this.authService.registerUser(user);
  }

  @ApiOperation({ summary: 'Login в систему' })
  @ApiOkResponse({ type: AuthResponse })
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }
}
