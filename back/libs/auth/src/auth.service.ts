import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserFacade } from '@lib/user/application-services';
import { CreateUserDto } from '@lib/user/application-services/commands/dto/create-user.dto';
import { UserRepository } from '@lib/user/providers';
import { ApiError } from '@lib/errors';
import { LoginDto } from '../../../src/api/controllers/auth/dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userFacade: UserFacade,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload) {
    return { ...payload.user };
  }

  async registerUser(user: CreateUserDto) {
    const existEmail = await this.userRepository.findByEmail(user.email);
    if (existEmail) throw new UnauthorizedException(ApiError.USER_EMAIL_EXIST);

    const existUsername = await this.userRepository.findByUsername(
      user.username,
    );
    if (existUsername)
      throw new UnauthorizedException(ApiError.USER_USERNAME_EXIST);
    return await this.userFacade.commands.createUser(user);
  }

  async login(dto: LoginDto) {
    const existUser = await this.userRepository.findByEmail(dto.email);
    if (!existUser) throw new UnauthorizedException(ApiError.WRONG_DATA);

    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!validatePassword) throw new UnauthorizedException(ApiError.WRONG_DATA);

    const payload = { email: dto.email, userId: existUser.id };
    const token = await this.jwtService.signAsync(payload);

    delete existUser.password;
    return { ...existUser, token };
  }
}
