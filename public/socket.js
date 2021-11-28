let socket = io();

function renderizaMensagem(mensagem){
    console.log('foi')
    $('.mensagens').append(`<div class="mensagem"><strong>${mensagem.username}</strong>: ${mensagem.mensagem}</div>`)
}

//Buscando mensagens antigas e renderizando na tela
socket.on('msgAntigas', (mensagens)=>{
    for(mensagem of mensagens){
        renderizaMensagem(mensagem)
    }
});

//Renderiza mensagem recebida pelo back-end
socket.on('msgRecebida', (mensagem)=>{
    renderizaMensagem(mensagem);
})

//monitorando nome e mensagens enviadas "Jquery" 
$('#chat').submit((event)=>{
    event.preventDefault();

    let username = $('input[name=username]').val()
    let mensagem = $('input[name=mensagem]').val()

    if(username.length && mensagem.length){
        let objMensagem = {
            username: username,
            mensagem: mensagem,
        };
        renderizaMensagem(objMensagem)
        socket.emit('enviaMensagem', objMensagem)
    }
})