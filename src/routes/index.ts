import { Router } from 'express';
import { container } from 'tsyringe';
import SendMailService from '../services/SendMailService';

const routes = Router();

routes.post('/send-mail', (req, res) => {
  const { to_name, to_email, subject } = req.body;
  const sendMail = container.resolve(SendMailService);
  sendMail.execute({
    toName: to_name,
    toEmail: to_email,
    subject
  });
  res.status(200).send('E-mail enviado com sucesso!');
});


export { routes };