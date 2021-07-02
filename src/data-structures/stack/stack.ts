export class Stack<T> {
	constructor(private readonly item: T[] = []) {}

	push(item: T): void {
		this.item.push(item)
	}

	pop(): T | undefined {
		return this.item.pop()
	}

	peek(): T | undefined {
		return this.item[this.item.length - 1]
	}

	count(): number {
		return this.item.length
	}
}
