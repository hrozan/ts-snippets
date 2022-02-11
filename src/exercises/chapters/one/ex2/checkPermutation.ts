export type StringHashTable = {
	[key: number]: string[];
};

export function stringToStringHashTable(input: string): StringHashTable {
	const table: StringHashTable = {};
	for (const c of input) {
		const key = c.charCodeAt(0);
		if (!table[key]) {
			table[key] = [c];
		} else {
			table[key].push(c);
		}
	}
	return table;
}

export function stringHashTableToString(table: StringHashTable): string {
	let result = "";
	for (const i of Object.values(table)) {
		i.forEach((c) => (result = result.concat(c)));
	}
	return result;
}

export function checkPermutation(input: string, compare: string): boolean {
	if (input.length !== compare.length) {
		return false;
	}
	const stringHashTable = stringToStringHashTable(input);
	const compareStringHashTable = stringToStringHashTable(compare);

	return stringHashTableToString(stringHashTable) === stringHashTableToString(compareStringHashTable);
}
