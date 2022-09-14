import { inject, injectable } from 'tsyringe';

import { IMailQueueProvider } from '../container/providers/QueueProvider/models/IMailQueueProvider';
import { IMailProvider } from '../container/providers/MailProvider/models/IMailProvider';

@injectable()
export class ProcessMailQueueJob {
  constructor(
    @inject('MailQueueProvider')
    private mailQueueProvider: IMailQueueProvider,
    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public execute(): void {
    this.mailQueueProvider.process(async job => {
      await this.mailProvider.sendMail(job.data);
    });
  }
}
