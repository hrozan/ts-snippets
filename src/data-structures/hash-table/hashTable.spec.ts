import { HashTable } from './hashTable'

describe('Hash Table', () => {
	let hashTable: HashTable
	beforeEach(() => {
		hashTable = new HashTable()
	})

	it('should be defined', () => {
		expect(hashTable).toBeDefined()
	})
})
