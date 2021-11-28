var socket = io('http://localhost:3000');

function renderizaMensagem(mensagem){
    console.log('foi')
    $('.mensagens').append(`<div class="mensagem"><strong>${mensagem.username}</strong>: ${mensagem.mensagem}</div>`)
}

socket.on('msgAntigas', (mensagens)=>{
    for(mensagem of mensagens){
        renderizaMensagem(mensagem)
    }
})

socket.on('msgRecebida', (mensagem)=>{
    renderizaMensagem(mensagem);
})

$('#chat').submit((event)=>{
    event.preventDefault();

    var username = $('input[name=username]').val()
    var mensagem = $('input[name=mensagem]').val()

    if(username.length && mensagem.length){
        var objMensagem = {
            username: username,
            mensagem: mensagem,
        };

        renderizaMensagem(objMensagem)

        socket.emit('enviaMensagem', objMensagem)
    }
})