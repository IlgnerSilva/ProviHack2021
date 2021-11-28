const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app)
const PORT = process.env.PORT || 3000
const io = require('socket.io')(server)
const cors = require('cors')

//Localizando e definindo engine de arquivos
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Tratando cors
app.use(cors());

//Rotas
app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/facebook', (req, res)=>{
    res.render('facebook')
})

app.get('/whatsapp', (req, res)=>{
    res.render('whatsapp')
})

app.get('/instagram', (req, res)=>{
    res.render('instagram')
})

//Array para armazenar mensgens 
let bdMensagens = []

//Monitorando entrada de usuário e mensagens
io.on('connection', socket =>{
    socket.emit('msgAntigas', bdMensagens)
    socket.on('enviaMensagem', data =>{
        bdMensagens.push(data);
        socket.broadcast.emit('msgRecebida', data)
    });
});

server.listen(PORT)