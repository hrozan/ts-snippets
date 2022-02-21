import { run, close } from "./app";
import axios from "axios";

describe("app", function () {
	afterEach(function () {
		close();
	});

	test("should ", async function () {
		run();

		const response = await axios.get("http://localhost:3000");

		expect(response.status).toEqual(200);
	});
});
