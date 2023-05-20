import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя пользователя', type: 'string' })
  firstname: string;

  @ApiProperty({ description: 'Username пользователя', type: 'string' })
  username: string;

  @ApiProperty({ description: 'Email пользователя', type: 'string' })
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    type: 'string',
  })
  password: string;
}
