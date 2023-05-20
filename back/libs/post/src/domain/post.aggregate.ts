import { IPost } from '@lib/post/domain/post.interface';
import { PostServices } from '@lib/post/domain/services';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUUID,
  validateSync,
} from 'class-validator';
import { Exclude } from 'class-transformer';
import { DomainError } from '@lib/errors';
import { randomUUID } from 'crypto';

export class PostAggregate extends PostServices implements IPost {
  @IsUUID()
  id: string = randomUUID();

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsUUID()
  @IsNotEmpty()
  authorId: string;

  @IsBoolean()
  @Exclude()
  isPublished = false;

  @IsString()
  createdAt = new Date().toISOString();

  @IsString()
  updatedAt = new Date().toISOString();

  private constructor() {
    super();
  }

  static create(post: Partial<IPost>) {
    const _post = new PostAggregate();
    Object.assign(_post, post);
    _post.updatedAt = post?.id ? new Date().toISOString() : _post.updatedAt;
    const errors = validateSync(_post);
    if (!!errors.length) {
      throw new DomainError(errors, 'Post is not valid');
    }
    return _post;
  }
}
