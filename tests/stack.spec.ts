import { Stack } from '../src/data-structure/stack'

describe('Stack OO', () => {
  let stack: Stack<string>
  beforeEach(() => {
    stack = new Stack<string>()
  })

  it('should push a item to the stack', () => {
    stack.push('test')

    expect(stack.count()).toEqual(1)
  })

  it('should push two item to the stack', () => {
    stack.push('test')
    stack.push('test')

    expect(stack.count()).toEqual(2)
  })

  it('should pop a item from the stack', () => {
    stack.push('test')
    stack.pop()

    expect(stack.count()).toEqual(0)
  })

  it('should peek a item from the stack', () => {
    stack.push('test')

    expect(stack.peek()).toEqual('test')
    expect(stack.count()).toEqual(1)
  })
})
