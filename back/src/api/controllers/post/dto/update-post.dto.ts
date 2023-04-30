import { UpdatePostDto as IUpdatePostDto } from '@lib/post/application-services/commands/dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class UpdatePostDto implements IUpdatePostDto {
  @ApiProperty({
    description: 'ID поста',
    type: 'string',
    example: randomUUID(),
  })
  @IsUUID()
  id: string;

  @IsUUID()
  authorId: string;

  @ApiPropertyOptional({ description: 'Заголовок поста', type: 'string' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @ApiPropertyOptional({ description: 'Сообщение поста', type: 'string' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  message: string;
}
