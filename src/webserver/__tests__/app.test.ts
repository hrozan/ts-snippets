import axios from "axios";
import { App } from "../app";

const BASE_URL = "http://localhost:3000";

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

		const response = await axios.get(BASE_URL);

		expect(response.status).toEqual(200);
	});
});
