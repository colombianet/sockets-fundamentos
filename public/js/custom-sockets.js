var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Oscar',
    message: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

// Recibir información del servidor
socket.on('enviarMensaje', function(data) {
    console.log('Server:', data);
});