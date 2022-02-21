import { createServer, IncomingMessage, ServerResponse } from "http";

function listener(_request: IncomingMessage, response: ServerResponse) {
	response.writeHead(200);
	response.end("hello");
}

const server = createServer(listener);

export function run(): void {
	server.listen(3000);
}

export function close(): void {
	server.close();
}
