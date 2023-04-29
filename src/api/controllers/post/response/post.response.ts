import { IPost } from '@lib/post';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class PostResponse implements Omit<IPost, 'isPublished'> {
  @ApiProperty({
    description: 'ID поста',
    type: 'string',
    example: randomUUID(),
  })
  id: string;

  @ApiProperty({ description: 'Заголовок поста', type: 'string' })
  title: string;

  @ApiProperty({ description: 'Сообщение поста', type: 'string' })
  message: string;

  @ApiProperty({
    description: 'ID автора сообщения',
    type: 'string',
    example: randomUUID(),
  })
  authorId: string;

  @ApiProperty({
    description: 'Дата создания поста',
    type: 'string',
    example: new Date().toISOString(),
  })
  createdAt: string;

  @ApiProperty({
    description: 'Дата обновления поста',
    type: 'string',
    example: new Date().toISOString(),
  })
  updatedAt: string;
}
