import { IMailQueueDTO } from '../dtos/IMailQueueDTO';

interface IJob {
  data: IMailQueueDTO;
}

export interface IMailQueueProvider {
  add: (data: IMailQueueDTO) => Promise<void>;
  process(processFunction: (job: IJob) => Promise<void>): void;
}
