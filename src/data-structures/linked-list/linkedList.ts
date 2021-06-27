export class ListNode<T> {
	constructor(public readonly value: T, public readonly next: ListNode<T> | null = null) {}
}

export class LinkedList<T> {
	constructor(private head: ListNode<T> | null) {}

	size(): number {
		let count = 0
		let node = this.head
		while (node) {
			count++
			node = node.next
		}
		return count
	}

	clear(): void {
		this.head = null
	}

	getLast(): T | null {
		let lastNode = this.head
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next
			}
			return lastNode.value
		}
		return null
	}

	getFirst(): T | null {
		return this.head ? this.head.value : null
	}
}
