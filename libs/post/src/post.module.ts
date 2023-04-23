import { Module, OnModuleInit } from '@nestjs/common';
import { CommandBus, CqrsModule, EventBus, QueryBus } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '@lib/entities';
import { POST_EVENTS_HANDLER } from './application-services/events';
import { POST_QUERIES_HANDLER } from './application-services/queries';
import { POST_COMMANDS_HANDLER } from './application-services/commands';
import { PostFacade } from './application-services';
import { postFacadeFactory } from './providers/post-facade.factory';
import { PostRepository, PostAdapter } from './providers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([PostEntity])],
  providers: [
    ...POST_COMMANDS_HANDLER,
    ...POST_QUERIES_HANDLER,
    ...POST_EVENTS_HANDLER,
    {
      provide: PostFacade,
      inject: [CommandBus, QueryBus, EventBus],
      useFactory: postFacadeFactory,
    },
    {
      provide: PostRepository,
      useClass: PostAdapter,
    },
  ],
  exports: [PostFacade],
})
export class PostModule implements OnModuleInit {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}
  onModuleInit() {
    this.commandBus.register(POST_COMMANDS_HANDLER);
    this.queryBus.register(POST_QUERIES_HANDLER);
    this.eventBus.register(POST_EVENTS_HANDLER);
  }
}
