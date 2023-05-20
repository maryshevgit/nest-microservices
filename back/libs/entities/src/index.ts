import { PostEntity } from './post.entity';
import { UserEntity } from './user.entity';

export * from './post.entity';
export * from './user.entity';

export const ENTITIES = [PostEntity, UserEntity];
