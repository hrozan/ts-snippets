import http from "axios";
import { App, createApp } from "./app";

const BASE_URL = "http://localhost:3000";

enum HttpStatus {
	Ok = 200,
}

describe("app", () => {
	let app: App;

	beforeEach(() => {
		app = createApp();
	});

	afterEach(async () => {
		await app.close();
	});

	it("should return 200 ", async () => {
		await app.run();

		const response = await http.get(BASE_URL);

		expect(response.status).toEqual(HttpStatus.Ok);
	});
});
