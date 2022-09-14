import Bull, { Queue, QueueOptions, ProcessPromiseFunction } from 'bull';
import { IMailQueueDTO } from '../dtos/IMailQueueDTO';
import { IMailQueueProvider } from '../models/IMailQueueProvider';

class BullSendMailProvider implements IMailQueueProvider {
  private queue: Queue;

  constructor(queueConfig: QueueOptions) {
    this.queue = new Bull('mail-queue', queueConfig);
  }

  async add(data: IMailQueueDTO) {
    await this.queue.add(data);
  }

  process(processFunction: ProcessPromiseFunction<IMailQueueDTO>): void {
    this.queue.process(processFunction);
  }
}

export { BullSendMailProvider };
