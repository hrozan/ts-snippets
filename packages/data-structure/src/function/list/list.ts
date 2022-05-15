type ListNode<T> = {
	value: T;
	next: ListNode<T> | null;
};

export type List<T> = {
	append: (value: T) => void;
	forEach: (cb: (item: T) => void) => void;
};

export function createList<T>(): List<T> {
	let head: ListNode<T>;
	return {
		append(value: T): void {
			const node: ListNode<T> = {
				value,
				next: null,
			};

			if (!head) {
				head = node;
				return;
			}

			let aux = head;
			while (aux.next !== null) {
				aux = aux.next;
			}
			aux.next = node;
		},
		forEach(cb: (item: T) => void): void {
			if (!head) {
				return;
			}
			let aux = head;
			while (aux.next !== null) {
				cb(aux.value);
				aux = aux.next;
			}
		},
	};
}
