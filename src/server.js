import Server from 'socket.io';

export default function startServer(){
	const io = new Server().attach(8090);

	store.subscribe(
		() => io.emit('state', store.getState().toJS())
		);
}