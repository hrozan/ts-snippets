export function oneEditAway(first: string, second: string): boolean {
	if (first === second) {
		return false
	}

	if (Math.abs(first.length - second.length) > 1) {
		return false
	}

	let i = 0
	let j = 0
	let diff = 0

	while (i < first.length && j < second.length) {
		const f = first[i]
		const s = second[j]

		if (f !== s) {
			diff++
			if (first.length > second.length) i++
			if (second.length > first.length) j++
			if (second.length === first.length) {
				i++
				j++
			}
		} else {
			i++
			j++
		}
		if (diff > 1) {
			return false
		}
	}

	return !(diff === 1 && first.length !== second.length && (i !== first.length || j !== second.length))
}
