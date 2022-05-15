import { Map, createMap } from "./map";

describe("Map", () => {
	let map: Map<string, string>;
	beforeEach(() => {
		map = createMap();
	});

	it("should add a item from the map", () => {
		map.add(
			"0be4c33e-63bc-45e8-b8d7-d462f5139a6d",
			"Cum adiurator experimentum, omnes lapsuses locus talis, fidelis gloses."
		);
	});

	it("should get a item from the map", () => {
		const key = "09789d49-648b-4b48-a588-a6ea73aa1cf0";
		const value = "Cum adiurator experimentum, omnes lapsuses locus talis, fidelis gloses.";

		map.add(key, value);

		expect(map.get(key)).toEqual(value);
	});
});
