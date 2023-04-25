export function reverseWord(word: string): string {
  if (word.length === 1) {
    return word[0]
  }
  return reverseWord(word.slice(1)) + word[0]
}
