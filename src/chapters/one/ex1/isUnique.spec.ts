import { isUnique } from './isUnique'

describe('isUnique', () => {
	it('should return true for string with no repeated character', () => expect(isUnique('asdf')).toBeTruthy())

	it('should return false for string with repeated character', () => expect(isUnique('asdfa')).toBeFalsy())
})
