import { createServer, IncomingMessage, ServerResponse } from "http";

function listener(_request: IncomingMessage, response: ServerResponse) {
	response.writeHead(200);
	response.end("hello");
}

const server = createServer(listener);
server.listen(3000, () => {
	console.log("server start on http://localhost:3000");
});
