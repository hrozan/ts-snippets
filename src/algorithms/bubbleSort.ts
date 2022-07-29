function swap(arr: number[], xp: number, yp: number): void {
  const temp = arr[xp]
  arr[xp] = arr[yp]
  arr[yp] = temp
}

export function bubbleSort(arr: number[]): void {
  let hasSwapped = true
  while (hasSwapped) {
    hasSwapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        hasSwapped = true
      }
    }
  }
}
