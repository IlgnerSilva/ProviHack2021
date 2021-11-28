const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app)
const PORT = process.env.PORT || 3000
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public/views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

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
let bdMensagens = []

io.on('connection', socket =>{
    console.log(`Socket conectado: ${socket.id}`)

    socket.emit('msgAntigas', bdMensagens)

    socket.on('enviaMensagem', data =>{
        console.log(data)
        bdMensagens.push(data);
        socket.broadcast.emit('msgRecebida', data)
    })
})

server.listen(PORT, ()=>{
    console.log('Servidor rodando em localhost:3000')
})