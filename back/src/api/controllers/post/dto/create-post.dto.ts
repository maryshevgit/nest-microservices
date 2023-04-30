import { CreatePostDto as ICreatePostDto } from '@lib/post/application-services/commands/dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto implements ICreatePostDto {
  @ApiProperty({ description: 'Заголовок поста', type: 'string' })
  @IsUUID()
  authorId: string;

  @ApiProperty({ description: 'Сообщение поста', type: 'string' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
