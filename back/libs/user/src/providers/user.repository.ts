import { IUser, UserAggregate } from '@lib/user/domain';

export abstract class UserRepository {
  abstract save(user: IUser): Promise<UserAggregate>;
  abstract findOne(id: string): Promise<UserAggregate | null>;
}
