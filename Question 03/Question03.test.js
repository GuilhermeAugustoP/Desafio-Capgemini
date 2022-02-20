const { stringMaxLimit, stringSplit, checkChunks } = require('./Question03')

describe('Question03 test', () => {
    describe('checkChunks', () => {
        test('Should return 2 pairs of anagrams to string "ovo".', () => {
            const str = 'ovo'
            const result = checkChunks(str)
            expect(result).toEqual(2)
        })
        test('Should return 3 pairs of anagrams to string "ifailuhkqq".', () => {
            const str = 'ifailuhkqq'
            const result = checkChunks(str)
            expect(result).toEqual(3)
        })
        test('Should return 4 pairs of anagrams to string "gebcepmjgm".', () => {
            const str = 'gebcepmjgm'
            const result = checkChunks(str)
            expect(result).toEqual(4)
        })
        test('Should return 0 pairs of anagrams to string "oayn".', () => {
            const str = 'oayn'
            const result = checkChunks(str)
            expect(result).toEqual(0)
        })
        test('Should return 1 pairs of anagrams to string "zjjie".', () => {
            const str = 'zjjie'
            const result = checkChunks(str)
            expect(result).toEqual(1)
        })
        test('Should return 0 pairs of anagrams to string "a".', () => {
            const str = 'a'
            const result = checkChunks(str)
            expect(result).toEqual(1)
        })
    })
})