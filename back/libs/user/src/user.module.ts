import { Module, OnModuleInit } from '@nestjs/common';
import { CommandBus, CqrsModule, EventBus, QueryBus } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@lib/entities';
import { USER_COMMANDS_HANDLER } from './application-services/commands';
import { USER_QUERIES_HANDLER } from './application-services/queries';
import { USER_EVENTS_HANDLER } from './application-services/events';
import { UserFacade } from './application-services';
import { userFacadeFactory } from './providers/user-facade.factory';
import { UserAdapter, UserRepository } from './providers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [
    ...USER_COMMANDS_HANDLER,
    ...USER_QUERIES_HANDLER,
    ...USER_EVENTS_HANDLER,
    {
      provide: UserFacade,
      inject: [CommandBus, QueryBus, EventBus],
      useFactory: userFacadeFactory,
    },
    {
      provide: UserRepository,
      useClass: UserAdapter,
    },
  ],
  exports: [UserFacade],
})
export class UserModule implements OnModuleInit {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}
  onModuleInit() {
    this.commandBus.register(USER_COMMANDS_HANDLER);
    this.queryBus.register(USER_QUERIES_HANDLER);
    this.eventBus.register(USER_EVENTS_HANDLER);
  }
}
