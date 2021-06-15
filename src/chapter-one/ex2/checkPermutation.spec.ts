import { checkPermutation } from './checkPermutation'

describe('checkPermutation', () => {
	it('should true for permutation', () =>
		expect(checkPermutation('abc', 'bca')).toBeTruthy())

	it('should false for not permutation', () =>
		expect(checkPermutation('abc', 'efg')).toBeFalsy())
})
