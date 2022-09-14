import { container } from 'tsyringe';
import queueConfig from '../../../config/queue';
import { BullSendMailProvider } from './implementations/BullSendMailProvider';
import { IMailQueueProvider } from './models/IMailQueueProvider';

container.registerInstance<IMailQueueProvider>(
  'MailQueueProvider',
  new BullSendMailProvider(queueConfig.config.bull),
);
