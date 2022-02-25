import { createServer, IncomingMessage, Server, ServerResponse } from "http";

export class App {
	server: Server;
	constructor() {
		this.server = createServer(this.listener);
	}

	private listener(_request: IncomingMessage, response: ServerResponse) {
		response.writeHead(200);
		response.end("hello");
	}
	run(): Promise<void> {
		return new Promise((resolve, rejects) => {
			this.server.on("error", () => {
				rejects();
			});

			this.server.listen(3000, () => {
				resolve();
			});
		});
	}

	close(): Promise<void> {
		return new Promise((resolve, rejects) => {
			this.server.close((err) => {
				if (err) {
					rejects(err);
				}
				resolve();
			});
		});
	}
}
