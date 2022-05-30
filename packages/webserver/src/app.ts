import { createServer, Server, IncomingMessage, ServerResponse } from "http";

export interface App {
	run(): Promise<App>;
	close(): Promise<void>;
}

class AppServer implements App {
	constructor(private readonly server: Server) {}

	private onRequest(_request: IncomingMessage, response: ServerResponse) {
		response.writeHead(200);
		response.end();
	}

	async run(): Promise<App> {
		return new Promise((resolve, rejects) => {
			this.server.on("error", () => {
				rejects();
			});

			this.server.on("request", this.onRequest);

			this.server.listen(3000, () => {
				resolve(this);
			});
		});
	}

	async close(): Promise<void> {
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

export function createApp(): App {
	const server = createServer();
	return new AppServer(server);
}
