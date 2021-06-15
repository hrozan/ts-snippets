export const urlify = (input: string): string => input.trimStart().trimEnd().replace(/\s/g, '%20')
