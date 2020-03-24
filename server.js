'use strict'
// Força o JS a ser mais criterioso, por exemplo caso se esqueça ";" ou seguir
// não seguir os padrões do EsLint

// Para importar os pacotes no Node tem que usar o compando "require" e
// adicionar numa constante para utilizá-los
const http = require('http')
const debug = require('debug')('nodestr:server')
// 'nodestr:server' é um nome que foi atribuido ao debug
const express = require('express')

// Para criar a aplicação será criada uma constante app rodando o express,
// e utilizaremos a porta 3000 e a atribuiremos a aplicação
const app = express()
// const port = 3000
// Para a versão de servidor (não local) precisamos pegar alguma porta que
// esteja disponível, pois não sabemos se a 3000 estará livre, para tal usaremos
// a função criada abaixo "normalizePort"
const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

// Uma vez inicializado o app, criaremos o servidor e router:
const server = http.createServer(app)
const router = express.Router()

// Agora criaremos um exemplo de rota

const route = router.get('/', (request, response, next) => {
  response.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})
// Atribuimos a rota no app
app.use('/', route)

// Agora vamos dizer para o servidor ficar ouvindo a porta
server.listen(port)
// Para tratar os possíveis erros do servidor chamaremos a função onError
server.on('error', onError)
server.on('listening', onListening)
console.log('API rodando na porta ' + port)

function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

// Criaremos uma função para tratar erros caso de algum problema no servidor
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

// Vamos utilizar o debug, para isso vamos criar a função:
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}

// Criar o diretório bin na raíz e colocar este arquivo ali para seguir as
// alterações
