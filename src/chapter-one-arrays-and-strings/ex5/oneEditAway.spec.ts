import { oneEditAway } from './oneEditAway'

describe('palindromePermutation', () => {
	it('should return true for case 1', () => expect(oneEditAway('pale', 'ple')).toBeTruthy())

	it('should return true for case 2', () => expect(oneEditAway('pales', 'pale')).toBeTruthy())

	it('should return true for case 3', () => expect(oneEditAway('pale', 'bale')).toBeTruthy())

	it('should return false for case 4', () => expect(oneEditAway('pale', 'bake')).toBeFalsy())

	it('should return false for case 5', () => expect(oneEditAway('abc', 'abde')).toBeFalsy())
})
