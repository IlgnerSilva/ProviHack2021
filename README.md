# Projeto de web destinado ao hackathon da ProviHack 2021 Para Todos, no qual o tema principal é diversidade.

## Descrição da aplicação:
Uma aplicação web com front e back-end onde o foco é o publico +50, mas que qualquer pessoa que queira aprender a utilizar os aplicativos mas populares da atualizadade poderão Usufruir  

## ## Ferramentas utilizadas:
Para o devenvolvmento como já mensionado foi utilizado Javascript com NodeJS como linguagem da aplicação Express como framework e os módulos ejs e socket.io para criação de um chat para interação de usuário.
Não foi utlizado banco de dados, porém o as mensagens do app são salvas em um array no qual os dados são perdidos apenas quando o servidor for reinicioado

## Dependencias necessárias:
```js
"dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "socket.io": "^4.4.0"
  }
```
As dependencias podem ser encontradas neste arquivo<a href = 'https://github.com/gabrielaalvescosta/ProviHack2021/blob/socketio-ejs/package.json'></a> do qual o trecho acima foi extraído.
Para instalar basta rodar o comando abaixo, selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v" o comando abaixo já irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/gabrielaalvescosta/ProviHack2021&& npm install
```

## Dependencias de desenvolvimento:
```js
"devDependencies": {
    "nodemon": "^2.0.15"
  }
```
  Em outra parte do arquivo<a href = 'https://github.com/gabrielaalvescosta/ProviHack2021/blob/socketio-ejs/package.json'></a> de configuração é possível encontrar o código acima, que foi extraído do mesmo, essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install nodemon --save-dev
```
## Inicialização da aplicação via terminal:
Para iniciar a aplicação localmente basta abrir o terminal na pasta do projeto e executar o senguinte comando:
```
npm run dev
OU
npm run start
```
## Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Equipe

<img sr![WhatsApp Image 2021-10-18 at 19 00 49](https://user-images.githubusercontent.com/88147834/143787164-815d11b8-ddd3-4263-b8ca-97f95bd370e8.jpeg)
c="Foto de Luciano Mendes sorrindo com camisa vermelha e usando brincos de cruz."<a href="https://www.linkedin.com/in/luciano-mendes-b32a38204/">Luciano Mendes | Front End</a>
