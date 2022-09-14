import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';
import { IMailTemplateProvider } from '../../MailTemplateProvider/models/IMailTemplateProvider';

import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProvider } from '../models/IMailProvider';

@injectable()
export class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider: IMailTemplateProvider,
  ) {
    nodemailer.createTestAccount()
      .then(() => {
        const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
            user: process.env.ETHEREAL_TEST_USER,
            pass: process.env.ETHEREAL_TEST_PASS,
          },
        });
        this.client = transporter;
      })
      .catch(error => {
        console.error(`Failed to create a testing account. ${error.message}`);
      });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {    
    const message = await this.client.sendMail({
      from: {
        name: from.name,
        address: from.email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
    console.log('Message sent: %s', message.messageId);
    console.log('Message URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
