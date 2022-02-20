function printLadder(n) {
    let str = ``
    for (let i = 0; i < n; i++) {
        const blank = ' '.repeat(n - i - 1)
        const star = '*'.repeat(i + 1)
        if (i === 0) {
            str += `${blank}${star}`
        }
        else {
            str += `
${blank}${star}`
        }
    }
    return str
}
module.exports = {
    printLadder,
}