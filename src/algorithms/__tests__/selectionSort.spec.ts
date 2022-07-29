import { generateRandomNumberArray } from '../generateRandomNumberArray'
import { selectionSort } from '../selectionSort'

describe('Selection Sort', () => {
  let arr: number[]

  beforeEach(() => {
    arr = generateRandomNumberArray()
  })

  it('should sort the array', () => {
    selectionSort(arr)

    for (let i = 0; i < arr.length - 1; i++) {
      expect(arr[i]).toBeLessThanOrEqual(arr[i + 1])
    }
  })
})
