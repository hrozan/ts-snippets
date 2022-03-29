export function insertionSort(arr: number[]) {
	for (let i = 1; i < arr.length; i++) {
		let temp = arr[i];
		let position = i - 1;

		while (position >= 0) {
			if (arr[position] > temp) {
				arr[position + 1] = arr[position];
				position--;
			} else {
				break;
			}
			arr[position + 1] = temp;
		}
	}
	return arr;
}
