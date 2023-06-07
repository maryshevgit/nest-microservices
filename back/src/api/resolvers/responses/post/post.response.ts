import { IPost } from '@lib/post';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostResponse implements Omit<IPost, 'isPublished'> {
  @Field(() => ID, { description: 'ID поста' })
  id: string;

  @Field({ description: 'Заголовок поста' })
  title: string;

  @Field({ description: 'Сообщение поста' })
  message: string;

  @Field({ description: 'ID автора сообщения' })
  authorId: string;

  @Field({ description: 'Дата создания поста' })
  createdAt: string;

  @Field({ description: 'Дата обновления поста' })
  updatedAt: string;
}
