function swap(arr: number[], xp: number, yp: number): void {
	const temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}

export function selectionSort(arr: number[]): void {
	let min_idx: number;
	for (let i = 0; i < arr.length - 1; i++) {
		min_idx = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min_idx]) {
				min_idx = j;
			}
		}

		swap(arr, min_idx, i);
	}
}
