import { HashMap } from "../hashMap";

xdescribe("Hash Table", () => {
	let map: HashMap<string>;
	beforeEach(() => {
		map = new HashMap();
	});

	it("should add a item to the hash table", () => {
		map.add("Cum adiurator experimentum, omnes lapsuses locus talis, fidelis gloses.");
	});
});
