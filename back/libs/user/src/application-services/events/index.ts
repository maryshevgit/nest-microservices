import { Type } from '@nestjs/common';
import { IEventHandler } from '@nestjs/cqrs';

export const USER_EVENTS_HANDLER: Type<IEventHandler>[] = [];
