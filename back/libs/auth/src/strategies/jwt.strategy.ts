import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth.service';
import { ICurrentUser } from '../interfaces';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ApiError } from '@lib/errors';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
    });
  }
  async validate(payload: ICurrentUser): Promise<ICurrentUser> {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException(ApiError.USER_NOT_FOUND);
    }
    return payload;
  }
}
