export type Stack<T> = {
	count: () => number;
	push: (item: T) => void;
	pop: () => T | undefined;
	peek: () => T | undefined;
};

export function createStack<T>(): Stack<T> {
	const items: T[] = [];
	return {
		count: () => items.length,
		push: (item: T) => items.push(item),
		pop: () => items.pop(),
		peek: () => items[items.length - 1],
	};
}
