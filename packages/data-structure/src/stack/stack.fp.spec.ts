import { createStack, Stack } from "./stack.fp";

describe("Stack Fp", () => {
	let stack: Stack<string>;
	beforeEach(() => {
		stack = createStack();
	});

	it("should push a item to the stack", () => {
		stack.push("test");

		expect(stack.count()).toEqual(1);
	});

	it("should push two item to the stack", () => {
		stack.push("test");
		stack.push("test");

		expect(stack.count()).toEqual(2);
	});

	it("should pop a item from the stack", () => {
		stack.push("test");
		stack.pop();

		expect(stack.count()).toEqual(0);
	});
});
