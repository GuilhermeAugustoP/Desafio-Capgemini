const { vfyStrength } = require('./Question02')

describe('Question02 test', () => {
    describe('vfyStrength', () => {
        test('Should return 3 to be a strong password.', () => {
            const pwd = 'Ya3'
            const result = vfyStrength(pwd)
            expect(result).toEqual(3)
        })
        test('Should return 0. Password matches the minimum length!', () => {
            const pwd = '33aAd&'
            const result = vfyStrength(pwd)
            expect(result).toEqual(0)
        })
        test('Should return 2 to be a strong password.', () => {
            const pwd = '1234'
            const result = vfyStrength(pwd)
            expect(result).toEqual(2)
        })
        test('Should return 0. Password matches the minimum length!', () => {
            const pwd = '12ab*@'
            const result = vfyStrength(pwd)
            expect(result).toEqual(0)
        })
        test('Should return 6 to be a strong password.', () => {
            const pwd = ''
            const result = vfyStrength(pwd)
            expect(result).toEqual(6)
        })
        test('Should return 0. Password matches the minimum length!', () => {
            const pwd = '123456789'
            const result = vfyStrength(pwd)
            expect(result).toEqual(0)
        })
    })
})