import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Email пользователя', type: 'string' })
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    type: 'string',
  })
  password: string;
}
