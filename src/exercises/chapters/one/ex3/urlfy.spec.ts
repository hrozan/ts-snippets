import { urlify } from "./urlify";

describe("urlify", () => {
	it("should oneWay string 1", () => expect(urlify("Mr John Smith    ")).toEqual("Mr%20John%20Smith"));
});
