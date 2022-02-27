import { bubbleSort } from "./bubbleSort";

describe("Bubble Sort", () => {
	const length = 50;
	let arr: number[] = [];

	beforeEach(() => {
		const max = length * 2;
		for (let i = 0; i < length; i++) {
			const element = Math.ceil(Math.random() * max + 1);
			arr.push(element);
		}
	});

	it("should order the array", () => {
		bubbleSort(arr);

		for (let i = 0; i < length - 1; i++) {
			expect(arr[i]).toBeLessThanOrEqual(arr[i + 1]);
		}
	});
});
