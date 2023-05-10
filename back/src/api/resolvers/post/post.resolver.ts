import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostFacade } from '@lib/post/application-services';
import { PaginationDto } from '@lib/shared';
import { plainToInstance } from 'class-transformer';
import { PaginatedPosts, PostResponse } from '../responses';
import { CreatePostInput, UpdatePostInput } from '../inputs';
import { randomUUID } from 'crypto';

@Resolver(() => PostResponse)
export class PostResolver {
  constructor(private readonly postFacade: PostFacade) {}

  @Query(() => PostResponse, { name: 'post' })
  async getPostById(@Args('id') id: string) {
    return this.postFacade.queries.getOnePost(id);
  }

  @Query(() => PaginatedPosts, { name: 'posts' })
  async getPosts(@Args() paginationDto: PaginationDto) {
    const pagination = plainToInstance(PaginationDto, paginationDto);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [data, total] = await this.postFacade.queries.getAllPosts(pagination);
    return {
      ...pagination,
      data,
      total,
    };
  }

  @Mutation(() => PostResponse)
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postFacade.commands.createPost({
      ...createPostInput,
      authorId: randomUUID(),
    });
  }

  @Mutation(() => PostResponse)
  async updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postFacade.commands.updatePost({
      ...updatePostInput,
      authorId: randomUUID(),
    });
  }

  @Mutation(() => PostResponse)
  async setPublishedPost(@Args('id') id: string) {
    return this.postFacade.commands.setPublished(id);
  }

  @Mutation(() => Boolean)
  async deletePost(@Args('id') id: string) {
    return this.postFacade.commands.deletePost(id);
  }
}
