# Front-End ProviHack
O projeto foi desenvolvimento dentro da evento #ProviHackParaTodos2021 cujo proposta foi: "Como a tecnologia pode melhorar a vida de pessoas diversas?"

Após reflexão e pesquisa, o grupo da diversidade etária foi escolhido, focando nas dificuldades em utilizar as redes sociais mais recorrentes na sociedade, como whatsapp, faceboook, instagram e, até mesmo, o próprio youtube. 


# VôuTech

Considerando a problemática, após mais pesquisas qualitativas, a equipe decidiu por criar uma página <b>web mobile (considerando que as pessoas de idade avançada usam mais smartphones do que eu outros aparelhos de conexão web)</b>, com tutoriais de linguagem e usabilidade acessíveis, onde estes pudessem adquirir as habilidades de usar as redes sociais com mais facilidade. A solução desenvolvida apresenta diversificação de uma mesma dúvida para que pessoas que queiram aprender possam se adaptar a melhor forma de acompanhar o passo a passo. Além disso, o grupo desenvolveu um chat para comunicação do usuário

Pensando no desafio dado, escolhemos o grupo de idosos pois, assim como no nosso grupo, a maioria das pessoas tem contato com eles e conhecem as dificuldades que enfrentam todos os dias.

Depois de muita pesquisa, chegamos então ao problema: “Como poderíamos ajudar idosos a ter autonomia em redes sociais?”.

E como solução, criamos o VôuTech um site voltado para o mobile, onde os idosos poderão acessar tutoriais de uso das principais funcionalidades de redes sociais, como WhatsApp, Instagram, Facebook e Youtube.


# Créditos

## Camila (UX/UI)
<a href="https://linkedin.com/in/gabrielaalvescosta" target="_blank">LinkedIn</a> 

## Ilgner Silva (dev full stack)
<a href="https://github.com/ilgner.silva" target="_blank">GitHub</a> 
<a href="https://linkedin.com/in/ilgner-silva" target="_blank">LinkedIn</a> 

## Gabriela Costa (dev front-end)
<a href="https://github.com/gabrielaalvescosta" target="_blank">GitHub</a> 
<a href="https://linkedin.com/in/gabrielaalvescosta" target="_blank">LinkedIn</a> 

## Luciano Mendes (dev front-end)
<a href="https://github.com/gabrielaalvescosta" target="_blank">GitHub</a> 
<a href="https://linkedin.com/in/gabrielaalvescosta" target="_blank">LinkedIn</a> 

## Larissa Iasmin (UX/UI)
<a href="https://linkedin.com/in/gabrielaalvescosta" target="_blank">LinkedIn</a> 

## Paola (Product Manager / PO)
<a href="https://linkedin.com/in/gabrielaalvescosta" target="_blank">LinkedIn</a> 


=======

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

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário instalação de versão igual ou superior para a perfeita execução da mesma.

