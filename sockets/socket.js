const {io} =  require('../index');
//mensajes de sockets

io.on('connect', socket=>{
    console.log('Cliente conectado');

    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado');
    });

    socket.emit("hello", "world");

    /*cliente.on('mensaje', (payload) =>{
        console.log('mensaje:', payload);
        io.emit('mensaje', {admin:'Nuevo mensaje'});
    });*/

    socket.on('mensaje', (payload) => {
        console.log('mensaje:', payload);
        io.emit('mensaje', {admin: 'Nuevo mensahe'});
    });


});