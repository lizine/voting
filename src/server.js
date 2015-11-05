import Server from 'socket.io';

export default function startServer(store){
	const io = new Server().attach(8090);

	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	 //listen new connections and emit current state
	io.on('connection', (socket) => {
		socket.emit('state', store.getState().toJS());

		//let clients emit action events
		socket.on('action', store.dispatch.bind(store));
	});
}