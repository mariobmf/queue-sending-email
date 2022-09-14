
# Fila para envio de e-mail

Projeto criado com a intenção de testar o envio de e-mail utilizando um sistema de fila, pode ser implementado em uma API REST ou microsserviço. Foi criado uma API com Express.js para acionar o envio do e-mail e para criar uma fila foi utilizado o BULL. Para montar o template de e-mail e enviá-lo foi utilizado o Handlebars com o Nodemailer.

## Referência

 - [Express.js](https://expressjs.com/)
 - [BULL](https://github.com/OptimalBits/bull)
 - [TSyringe](https://github.com/microsoft/tsyringe)
 - [Handlebars](https://handlebarsjs.com/)
 - [Nodemailer](https://nodemailer.com/about/)
 
## Como executar

**Para executar o projeto sem Docker:**

- Para executar o projeto é necessário o **Redis**
- Crie uma conta de email fake para ser usada com *Nodemailer*, use o seguinte site: https://ethereal.email/
- Configure as variáveis de ambiente, use o arquivo `.env.example` como base
- Execute os seguintes comandos no terminal:

```bash
  # yarn
  # yarn dev
```
OU
```bash
  # npm install
  # npm run dev
```

**Para executar com Docker:**
```bash
  # docker compose up
```


## Documentação da API

#### Envia um e-mail

```http
  POST /send-mail
```

Request Body (JSON)
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `to_name` | `string` | **Obrigatório**. Nome do destinatário |
| `to_email` | `string` | **Obrigatório**. E-mail do destinatário |
| `subject` | `string` | **Obrigatório**. assunto |

