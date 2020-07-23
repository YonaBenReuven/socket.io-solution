const socketio = require('socket.io');

const io = socketio(8080);

io.on('connection', socket => {
	console.log(`socket connected: ${socket.id}`);

	socket.on('join', chatName => {
		socket.join(chatName);
	});

	socket.on('leave', chatName => {
		socket.leave(chatName);
	});

	socket.on('message-sent', (chatName, message) => {
		socket.to(chatName).emit('message-recieved', message)
	});

	socket.on('is-typing', (chatName, name) => {
		socket.to(chatName).emit('is-typing', name)
	});
});

