import { Stack } from './stack'

describe('Stack', () => {
	let stack: Stack<string>
	beforeEach(() => {
		stack = new Stack<string>()
	})

	it('should push a item to the stack', () => {
		stack.push('test')

		expect(stack.count).toEqual(1)
	})
})
