import { IUser } from '@lib/user/domain';

export type UpdateUserDto = Partial<
  Pick<IUser, 'username' | 'firstname' | 'email' | 'id'>
>;
