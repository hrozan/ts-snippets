function swap(arr: number[], xp: number, yp: number): void {
	const temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

export function selectionSort(arr: number[]): void {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIdx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}

		swap(arr, minIdx, i);
	}
}
