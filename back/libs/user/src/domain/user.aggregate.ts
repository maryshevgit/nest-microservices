import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  validateSync,
} from 'class-validator';
import { IUser } from '@lib/user/domain';
import { AggregateRoot } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { DomainError } from '@lib/errors';

export class UserAggregate extends AggregateRoot implements IUser {
  @IsUUID()
  id: string = randomUUID();

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  createdAt = new Date().toISOString();

  private constructor() {
    super();
  }

  static create(user: Partial<IUser>) {
    const _user = new UserAggregate();
    Object.assign(_user, user);
    const errors = validateSync(_user);
    if (!!errors.length) {
      throw new DomainError(errors, 'User error');
    }
    return _user;
  }
}
