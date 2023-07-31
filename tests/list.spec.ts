import { List } from '../src/data-structure/list'

describe('List', () => {
  let list: List<number>
  beforeEach(() => {
    list = new List()
  })

  it('should create a list with 3 elements', () => {
    const a = [1, 3, 4]

    a.forEach((i) => {
      list.append(i)
    })

    let count = 0
    list.forEach((i) => {
      expect(a[count]).toEqual(i)
      count++
    })
  })
})
