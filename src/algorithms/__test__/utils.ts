/**
 * Generate an array with 50 number
 * @param length Custom length
 */
export function generateRandomNumberArray(length = 50): number[] {
	const arr: number[] = [];
	const max = length * 2;

	for (let i = 0; i < length; i++) {
		const element = Math.ceil(Math.random() * max + 1);
		arr.push(element);
	}
	return arr;
}
