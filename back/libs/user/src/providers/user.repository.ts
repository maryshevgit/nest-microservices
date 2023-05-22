import { IUser, UserAggregate } from '@lib/user/domain';

export abstract class UserRepository {
  abstract save(user: IUser): Promise<UserAggregate>;
  abstract findOne(id: string): Promise<UserAggregate | null>;
  abstract delete(id: string): Promise<boolean>;
  abstract findByEmail(email: string): Promise<IUser | null>;
  abstract findByUsername(username: string): Promise<IUser | null>;
}
