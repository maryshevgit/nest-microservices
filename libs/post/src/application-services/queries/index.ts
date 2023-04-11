import { Type } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';
import { GetPostQueryHandler } from '@lib/post/application-services/queries/get-post/get-post.query-handler';
import { GetPostsQueryHandler } from '@lib/post/application-services/queries/get-posts/get-posts.query-handler';

// queries
export * from './get-post/get-post.query';
export * from './get-posts/get-posts.query';

// query-handlers
export * from './get-post/get-post.query-handler';
export * from './get-posts/get-posts.query-handler';

export const POST_QUERIES_HANDLER: Type<IQueryHandler>[] = [
  GetPostQueryHandler,
  GetPostsQueryHandler,
];
