export function palindromePermutation(_input: string): boolean {
	const input = _input.replace(/\s/g, "").toLowerCase();

	const set = new Set<string>();

	for (const c of input) {
		if (set.has(c)) {
			set.delete(c);
		} else {
			set.add(c);
		}
	}

	return set.size <= 1;
}
