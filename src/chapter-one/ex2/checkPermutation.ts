type StringHashTable = {
	[key: number]: string[]
}

const stringToStringHashTable = (str: string): StringHashTable => {
	const table: StringHashTable = {}
	for (const c of str) {
		const key = c.charCodeAt(0)
		if (!table[key]) {
			table[key] = [c]
		} else {
			table[key].push(c)
		}
	}
	return table
}

const stringHashTableToString = (table: StringHashTable): string => {
	let result = ''
	for (const i of Object.values(table)) {
		i.forEach((c) => (result = result.concat(c)))
	}
	return result
}

export const checkPermutation = (main: string, compare: string): boolean => {
	if (main.length !== compare.length) {
		return false
	}
	const stringHashTable = stringToStringHashTable(main)
	const compareStringHashTable = stringToStringHashTable(compare)

	return stringHashTableToString(stringHashTable) === stringHashTableToString(compareStringHashTable)
}
