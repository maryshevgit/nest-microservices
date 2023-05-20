import { GraphQLError } from 'graphql/error';
import { Logger } from '@nestjs/common';

export const gqlErrorHandler = (error: GraphQLError) => {
  Logger.warn({ error });
  if ('response' in error.extensions) {
    const { message, ...response } = error.extensions['response'] as {
      message: string;
      response: object;
    };
    return {
      message,
      extensions: {
        timestamp: new Date().toISOString(),
        ...response,
      },
    };
  }
  return error;
};
