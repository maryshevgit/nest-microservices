import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IUser } from '@lib/user/domain';

export class AuthResponse implements IUser {
  @ApiProperty({
    description: 'ID пользователя',
    type: 'string',
    example: randomUUID(),
  })
  id: string;

  @ApiProperty({ description: 'Username пользователя', type: 'string' })
  username: string;

  @ApiProperty({ description: 'Имя пользователя', type: 'string' })
  firstname: string;

  @ApiProperty({ description: 'Email пользователя', type: 'string' })
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    type: 'string',
  })
  password: string;

  @ApiProperty({
    description: 'Дата создания пользователя',
    type: 'string',
    example: new Date().toISOString(),
  })
  createdAt: string;
}
