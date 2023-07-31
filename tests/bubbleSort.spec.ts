import { bubbleSort } from '../src/algorithms/sort/bubbleSort'
import { generateRandomNumberArray } from './utils/generateRandomNumberArray'

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
