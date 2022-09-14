import { QueueOptions } from 'bull';

interface IQueueConfig {
  config: {
    bull: QueueOptions;
  };
}

export default {
  config: {
    bull: {
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    },
  },
} as IQueueConfig;
