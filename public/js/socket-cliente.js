
const Online = document.querySelector('#Online');
const Offline = document.querySelector('#Offline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');
const cliente = io();


cliente.on('connect', () => {
    
    Offline.style.display = 'none';
    Online.style.display = '';

});

cliente.on('disconnect', () => {
    Online.style.display = 'none';
    Offline.style.display = '';
})


btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;

    cliente.emit('enviar_mensaje', mensaje, (id) => {
        console.log('Desde el server', id);
    });

    cliente.on('broadcast_mensaje', (payload) => {
        console.log(payload);
    })


});