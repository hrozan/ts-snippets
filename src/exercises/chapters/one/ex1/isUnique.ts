export function isUnique(str: string): boolean {
	const set = new Set()
	for (const s of str) {
		set.add(s)
	}
	return (set.size === str.length)
}
