import { inject, injectable } from "tsyringe";
import path from 'node:path';
import { IMailQueueProvider } from "../container/providers/QueueProvider/models/IMailQueueProvider";

interface IRequest {
  toName: string;
  toEmail: string;
  subject: string;
}

@injectable()
export default class SendMailService {
  constructor(
    @inject('MailQueueProvider')
    private mailQueueProvider: IMailQueueProvider,
  ) {}

  public async execute({toEmail, toName,subject}: IRequest): Promise<void> {
    const templateExample = path.resolve(__dirname, 'template_example.hbs');
    await this.mailQueueProvider.add({
      to: {
        name: toName,
        email: toEmail,
      },
      from: {
        name: 'Nome do Remetente',
        email: 'remetente@email.com',
      },
      subject,
      templateData: {
        file: templateExample,
        variables: {
          name: toName,
        },
      },
    });
  }
}