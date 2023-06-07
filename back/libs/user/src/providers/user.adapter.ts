import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '@lib/user/providers/user.repository';
import { IUser, UserAggregate } from '@lib/user/domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '@lib/entities/user.entity';

@Injectable()
export class UserAdapter implements UserRepository {
  private readonly logger = new Logger(UserAdapter.name);
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string): Promise<IUser | null> {
    return this.userRepository.findOneBy({ email });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.userRepository.delete(id).catch((err) => {
      this.logger.error(err);
      return false;
    });
    return !!result;
  }

  async findByUsername(username: string): Promise<IUser | null> {
    return this.userRepository.findOneBy({ username });
  }

  async findOne(id: string): Promise<UserAggregate> {
    const existUser = await this.userRepository
      .findOneBy({ id })
      .catch((err) => {
        this.logger.error(err);
        return null;
      });
    if (!existUser) return null;
    return UserAggregate.create(existUser);
  }

  async save(user: IUser): Promise<UserAggregate> {
    const existUser = await this.findOne(user.id);
    if (existUser) {
      const { id, ...toUpdate } = user;
      await this.userRepository.update({ id }, toUpdate);
      const updateUser = await this.findOne(user.id);
      delete updateUser.password;
      delete updateUser.createdAt;
      return updateUser;
    }
    const savedUser = await this.userRepository.save(user);
    return UserAggregate.create(savedUser);
  }
}
