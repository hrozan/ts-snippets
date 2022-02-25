import axios from "axios";
import { App } from "./app";

describe("app", () => {
	let app: App;

	beforeEach(() => {
		app = new App();
	});

	afterEach(async () => {
		return app.close();
	});

	test("should ", async function () {
		await app.run();

		const response = await axios.get("http://localhost:3000");

		expect(response.status).toEqual(200);
	});
});
