import { palindromePermutation } from './palindromePermutation'

describe('palindromePermutation', () => {
	it('should return true input 1', () => expect(palindromePermutation('Tact Coa')).toBeTruthy())

	it('should return true input 2', () => expect(palindromePermutation('aabbcc')).toBeTruthy())

	it('should return true input 3', () => expect(palindromePermutation('arara')).toBeTruthy())

	it('should return false', () => expect(palindromePermutation('asdfghitj')).toBeFalsy())
})
