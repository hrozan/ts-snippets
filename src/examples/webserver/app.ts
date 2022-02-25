import { createServer, IncomingMessage, ServerResponse } from "http";

function listener(_request: IncomingMessage, response: ServerResponse) {
	response.writeHead(200);
	response.end("hello");
}

const server = createServer(listener);

export function run(): Promise<void> {
	return new Promise((resolve, rejects) => {
		server.on("error", () => {
			rejects()
		})

		server.listen(3000, ()=>{
			resolve()
		})
	})
}

export function close(): Promise<void> {
	return new Promise((resolve, rejects) => {
		server.close(err => {
			if (err) {
				rejects(err)
			}
			resolve()
		});

	})
}
