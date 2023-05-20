import { IUser } from '@lib/user/domain';

export type CreateUserDto = Pick<
  IUser,
  'username' | 'firstname' | 'email' | 'password'
>;
