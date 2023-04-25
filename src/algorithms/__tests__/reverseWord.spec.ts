import { reverseWord } from '../reverseWord'

describe('Reverse Word', () => {
  it('should reverse a string', () => {
    const word = 'higor'
    const reversed = reverseWord(word)

    expect(reversed).toBe('rogih')
  })
})
