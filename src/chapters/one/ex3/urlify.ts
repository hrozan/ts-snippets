export function urlify(input: string): string {
	return input.trimStart().trimEnd().replace(/\s/g, '%20')
}
