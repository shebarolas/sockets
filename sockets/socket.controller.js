

const socketController = (cliente) => {
    console.log('Client connection', cliente.id);

    cliente.on('disconnect', () => {
        console.log('Client disconnected', cliente.id);
    });

    cliente.on('enviar_mensaje', (payload, callback) => {
        
        const id = 1234444;
        callback(id);

        cliente.broadcast.emit('broadcast_mensaje', payload);
    });
};


module.exports = {
    socketController
}