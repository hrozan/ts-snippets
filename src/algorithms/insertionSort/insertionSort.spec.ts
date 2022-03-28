import { insertionSort } from "./insertionSort";
import { generateRandomNumberArray } from "../generateRandomNumberArray";

xdescribe("Insertion Sort", () => {
	let arr: number[];

	beforeEach(() => {
		arr = generateRandomNumberArray();
	});

	it("should sort the array", () => {
		insertionSort(arr);

		for (let i = 0; i < arr.length - 1; i++) {
			expect(arr[i]).toBeLessThanOrEqual(arr[i + 1]);
		}
	});
});
