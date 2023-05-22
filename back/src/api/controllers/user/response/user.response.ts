import { IUser } from '@lib/user/domain';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class UserResponse implements Omit<IUser, 'createdAt' | 'password'> {
  @ApiProperty({
    description: 'ID пользователя',
    type: 'string',
    example: randomUUID(),
  })
  id: string;

  @ApiProperty({ description: 'Email пользователя', type: 'string' })
  email: string;

  @ApiProperty({ description: 'Имя пользователя', type: 'string' })
  firstname: string;

  @ApiProperty({ description: 'Username пользователя', type: 'string' })
  username: string;
}
