import http from "axios";

import { application, App } from "./app";

const BASE_URL = "http://localhost:3000";

describe("app", () => {
	let app: App;

	beforeEach(() => {
		app = application();
	});

	afterEach(async () => {
		return app.close();
	});

	it("should return 200 ", async function () {
		await app.run();

		const response = await http.get(BASE_URL);

		expect(response.status).toEqual(200);
	});
});
