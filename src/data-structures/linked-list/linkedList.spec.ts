import { LinkedList, ListNode } from './linkedList'

describe('Linked List', () => {
	it('should create a list node', () => {
		const value = 'test'
		const node = new ListNode(value)

		expect(node.value).toEqual(value)
		expect(node.next).toBeNull()
	})

	it('should create a linked list', () => {
		const n1 = new ListNode(1)
		const n2 = new ListNode(2, n1)

		const linkedList = new LinkedList(n2)

		expect(linkedList).toBeDefined()
	})

	it('should return the size', () => {
		const size = 5
		let node = null
		for (let i = 0; i < size; i++) {
			node = new ListNode(i, node)
		}
		const linkedList = new LinkedList(node)

		expect(linkedList.size()).toEqual(size)
	})

	it('should clear the list', () => {
		const size = 5
		let node = null
		for (let i = 0; i < size; i++) {
			node = new ListNode(i, node)
		}
		const linkedList = new LinkedList(node)

		linkedList.clear()

		expect(linkedList.size()).toEqual(0)
	})

	it('should get the last node', () => {
		const size = 5
		let node = null
		for (let i = 0; i < size; i++) {
			node = new ListNode(i, node)
		}
		const linkedList = new LinkedList(node)

		expect(linkedList.getLast()).toEqual(0)
	})

	it('should get the first node', () => {
		const size = 5
		let node = null
		for (let i = 0; i < size; i++) {
			node = new ListNode(i, node)
		}
		const linkedList = new LinkedList(node)

		expect(linkedList.getFirst()).toEqual(4)
	})
})
