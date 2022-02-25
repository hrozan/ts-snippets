import { run, close } from "./app";
import axios from "axios";

describe("app", function () {
	afterEach(async function () {
		await close();
	});

	test("should ", async function () {
		await run();

		const response = await axios.get("http://localhost:3000");

		expect(response.status).toEqual(200);
	});
});
