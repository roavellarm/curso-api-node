global.SALT_KEY = 'minha_senha_global!@#'
global.EMAIL_TMPL = 'Olá, <strong>{0}!</strong> Seja bem vindo!' // template de email

module.exports = {
  connectionString:
    'mongodb://rodrigo:rodrigo123@ds229918.mlab.com:29918/generics',

  // Sendgrid credentials

  // Mailchimp credentials
  // mailchimpkey: 'c0e5dd910bf432154e385cf0f50f0ffd-us19',

  // Mailgun credentials
  mailgunApiKey: '4261b984d199441d3f50a94a8590f483-ed4dc7c4-99eb91a5',
  mailgunDomain: 'sandbox29f33ec295864566b1e5a1d5c26caa0a.mailgun.org',

  // Azure Storage account for images
  // npm install azure-storage@2.1.0 --save
  containerConnectionString:
    'DefaultEndpointsProtocol=https;AccountName=meuapp;AccountKey=LfxCD4uhiaT3DqwzftUNwka7+Q1vPiTQZtIlQXSmkkzkU7m6gw65Ey/SfSC/y+iahTC6mqED/AWaicO8QWBq3g==;EndpointSuffix=core.windows.net'
  // Armazenar imagens no banco
}
