import { Field, ID, InputType } from '@nestjs/graphql';
import { UpdatePostDto } from '@lib/post/application-services/commands/dto';

@InputType()
export class UpdatePostInput implements UpdatePostDto {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  message: string;

  @Field({ nullable: true })
  title: string;

  authorId: string;
}
