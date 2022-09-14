import { IParseMailTemplateDTO } from '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export interface IMailQueueDTO {
  to: IMailContact;
  from: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
