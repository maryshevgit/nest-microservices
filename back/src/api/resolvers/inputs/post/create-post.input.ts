import { CreatePostDto } from '@lib/post/application-services/commands/dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput implements CreatePostDto {
  @Field()
  message: string;

  @Field()
  title: string;

  authorId: string;
}
