import { createServer } from 'http'
import { Socket } from 'net'

function handler(socket: Socket) {
	console.log(socket.remoteAddress)
	socket.end()
}

const server = createServer()

server.on('connection', handler)
server.listen(3000, () => {
	console.log('server start on http://localhost:3000')
})
