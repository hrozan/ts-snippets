export function isUnique(str: string): boolean {
	const set = new Set<string>()
	for (const s of str) {
		set.add(s)
	}
	return (set.size === str.length)
}
