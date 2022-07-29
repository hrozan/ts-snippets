import { bubbleSort } from '../bubbleSort'
import { generateRandomNumberArray } from '../generateRandomNumberArray'

describe('Bubble Sort', () => {
  let arr: number[]

  beforeEach(() => {
    arr = generateRandomNumberArray()
  })

  it('should sort the array', () => {
    bubbleSort(arr)

    for (let i = 0; i < arr.length - 1; i++) {
      expect(arr[i]).toBeLessThanOrEqual(arr[i + 1])
    }
  })
})
