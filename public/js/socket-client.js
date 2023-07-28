//Referencias del HTML

const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')



const socket = io();

socket.on('connect',() => {
    // console.log('Conectado');

    lbloffline.style.display = 'none';
    lblonline.style.display  = '';

});

socket.on('disconnect',()=>{
    // console.log('Desconectado del servidor');
    
    lblonline.style.display  = 'none';
    lbloffline.style.display = '';

});

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload)
})


btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id:'123ABC',
        fecha:new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('Desde el server',id)
    });

})





