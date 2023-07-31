import { insert, Node, search } from '../src/data-structure/binarySearchTree'

describe('Binary Search Tree', () => {
  it('should create a 3 node tree', () => {
    const root: Node<number> = {
      value: 5,
    }

    insert(4, root)
    insert(10, root)

    expect(root.value).toBe(5)
    expect(root.right?.value).toBe(10)
    expect(root.left?.value).toBe(4)
  })

  it('should search a value', () => {
    const root: Node<number> = {
      value: 10,
    }

    insert(5, root)
    insert(15, root)
    insert(9, root)
    insert(13, root)
    insert(7, root)

    const result = search(9, root)
    expect(result).not.toBeNull()
    expect(result?.value).toBe(9)
  })
})
