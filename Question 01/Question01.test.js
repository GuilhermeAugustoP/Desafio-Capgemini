const { printLadder } = require('./Question01')

describe('Question01 test', () => {
    describe('printLadder', () => {
        test('Should print a ladder using * with base and height equal 6.', () => {
            const n = 6
            const result = printLadder(n)
            const expectedString =
`     *
    **
   ***
  ****
 *****
******`
            expect(result).toEqual(expectedString)
        })
        test('Should print a ladder using * with base and height equal 1.', () => {
            const n = 1
            const result = printLadder(n)
            const expectedString =`*`
            expect(result).toEqual(expectedString)
        })
        test('Should print a ladder using * with base and height equal 7.', () => {
            const n = 7
            const result = printLadder(n)
            const expectedString =
`      *
     **
    ***
   ****
  *****
 ******
*******`
            expect(result).toEqual(expectedString)
        })
    })
})