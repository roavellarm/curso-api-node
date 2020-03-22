# Curso API com NoodeJS

## Dependências

- Node

Criar um diretório para o projeto, por exemplo:
```
$ mkdir node-str && cd node-str
```

Dentro do diretório inicializar uma aplicação do node, rodar o comando:
```
npm init -y
```

Será gerado o arquivo `package.json` que possui as seguintes informações:
- Nome da aplicação
- Versão da aplicação
- Descrição da aplicação
- Arquivo principal (index.js)
- Scripts que podem ser executados
- Keywords
- Author
- License

As informações constantes neste arquivo podem ser editadas manualmente ou pelo
comando acima, com o comando `-y` que já cria tal arquivo no padrão.

O node só interpreta JavaScript. Não é um framework, para criar uma API ou 
aplicações web teremos que instalar bibliotecas através dos pacotes do npm

Criar um arquivo `server.js`
```
$ touch server.js
```

Para criar um servidor http precisaremos instalar 3 pacotes: `http`, `express` e
um `debugger`

```
$ npm install http express debug --save
```

A instalação gera um diretorio `node_modules` onde ficarão as dependências que
precisaremos para a aplicação. Além disso irá adicionar as dependências no
arquivo `package.json`
```JSON
  "dependencies": {
    "debug": "^4.1.1",
    "express": "^4.17.1",
    "http": "0.0.0"
  }
```
O `debug` serve para debugar, o `express` provê o MVC, e o `http` é o servidor
http que criará um listener que ficará ouvindo uma porta para poder receber
as requisições e responder as mesmas.

Os passos seguintes encontram-se no arquivo `server.js`
