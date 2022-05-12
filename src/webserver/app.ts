import { createServer, IncomingMessage, ServerResponse } from "http";

export type App = {
	run: () => Promise<void>;
	close: () => Promise<void>;
};

export function application(): App {
	const listener = (request: IncomingMessage, response: ServerResponse) => {
		response.writeHead(200);
		response.end("hello");
	};

	const server = createServer(listener);
	return {
		run() {
			return new Promise((resolve, rejects) => {
				server.on("error", () => {
					rejects();
				});

				server.listen(3000, () => {
					resolve();
				});
			});
		},

		close() {
			return new Promise((resolve, rejects) => {
				server.close((err) => {
					if (err) {
						rejects(err);
					}
					resolve();
				});
			});
		},
	};
}
