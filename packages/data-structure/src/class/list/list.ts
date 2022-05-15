export class Node<T> {
	constructor(public readonly value: T, public next: Node<T> | null = null) {}
}

class EmptyListError extends Error {
	constructor() {
		super("EmptyListError");
	}
}

export class List<T> {
	private head: Node<T> | null;

	constructor() {
		this.head = null;
	}

	append(value: T): void {
		const node = new Node(value);

		if (this.head === null) {
			this.head = node;
			return;
		}

		let aux = this.head;
		while (aux.next !== null) {
			aux = aux.next;
		}

		aux.next = node;
	}
	forEach(cb: (item: T) => void): void {
		if (this.head === null) {
			throw new EmptyListError();
		}

		let aux = this.head;
		while (aux.next !== null) {
			cb(aux.value);
			aux = aux.next;
		}
	}
}
