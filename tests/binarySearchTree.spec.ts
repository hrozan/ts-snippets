import { Node, insert, remove, search } from '../src/data-structure/binarySearchTree'

describe('Binary Search Tree', () => {
  describe('Insert', () => {
    it('should insert 3 values ', () => {
      const root: Node<number> = {
        value: 5,
      }

      insert(4, root)
      insert(10, root)

      expect(root.value).toBe(5)
      expect(root.right?.value).toBe(10)
      expect(root.left?.value).toBe(4)
    })
  })

  describe('Search', () => {
    it('should search a value that exits', () => {
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

    it('should search a value that did not exists', () => {
      const root: Node<number> = {
        value: 10,
      }

      insert(5, root)
      insert(15, root)
      insert(9, root)
      insert(13, root)
      insert(7, root)

      const result = search(3, root)
      expect(result).toBeUndefined()
    })
  })

  describe('Remove', () => {
    it('should remove a value with right child', () => {
      const root: Node<number> = {
        value: 10,
      }

      insert(5, root)
      insert(15, root)
      insert(9, root)
      insert(13, root)
      insert(7, root)
      insert(8, root)

      remove(9, root)

      expect(search(9, root)).toBeUndefined()
      expect(search(5, root)).toBeDefined()
      expect(search(15, root)).toBeDefined()
      expect(search(13, root)).toBeDefined()
      expect(search(7, root)).toBeDefined()
      expect(search(8, root)).toBeDefined()
    })

    it('should remove a value with right child', () => {
      const root: Node<number> = {
        value: 10,
      }

      insert(5, root)
      insert(15, root)
      insert(9, root)
      insert(13, root)
      insert(7, root)
      insert(3, root)

      remove(9, root)

      expect(search(9, root)).toBeUndefined()
      expect(search(5, root)).toBeDefined()
      expect(search(15, root)).toBeDefined()
      expect(search(13, root)).toBeDefined()
      expect(search(7, root)).toBeDefined()
      expect(search(3, root)).toBeDefined()
    })
  })
  it('should remove a value with both child', () => {
    const root: Node<number> = {
      value: 10,
    }

    insert(5, root)
    insert(15, root)
    insert(9, root)
    insert(13, root)
    insert(7, root)
    insert(8, root)
    insert(3, root)

    remove(9, root)

    expect(search(9, root)).toBeUndefined()
    expect(search(5, root)).toBeDefined()
    expect(search(15, root)).toBeDefined()
    expect(search(13, root)).toBeDefined()
    expect(search(7, root)).toBeDefined()
    expect(search(8, root)).toBeDefined()
    expect(search(3, root)).toBeDefined()
  })
  it('should remove a value with bo child', () => {
    const root: Node<number> = {
      value: 10,
    }

    insert(5, root)
    insert(15, root)
    insert(9, root)
    insert(13, root)

    remove(9, root)

    expect(search(9, root)).toBeUndefined()
    expect(search(5, root)).toBeDefined()
    expect(search(15, root)).toBeDefined()
    expect(search(13, root)).toBeDefined()
  })
})
