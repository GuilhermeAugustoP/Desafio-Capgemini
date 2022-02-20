function checkStringsAnagram(strA, strB) {
    let len1 = strA.length
    let len2 = strB.length
    if (len1 !== len2) {
        return
    }
    let str1 = strA.split('').sort().join('')
    let str2 = strB.split('').sort().join('')
    if (str1 === str2) {
        return true
    } else {
        return false
    }
}
function stringMaxLimit(str) {
    const strLength = str.length
    const maxStrLength = Math.ceil(strLength / 2)
    return maxStrLength
}
function stringSplit(str) {
    const anagram = str.split("")
    const maxStrLength = stringMaxLimit(str)
    const chuncks = []
    for (let id = 0; id < maxStrLength; id++) {
        const chunckSize = id + 1
        const arrayLength = Math.ceil(str.length / chunckSize)
        const chunck = Array.from({ length: arrayLength }, (item, index) => { return anagram.slice(index, index + chunckSize).join('') })
        chuncks.push(chunck)
    }
    return chuncks
}
function checkChunks(str) {
    const chunks = stringSplit(str)
    let anagramsCounter = 0
    chunks.forEach((chunck) => {
        chunck.forEach((item, index) => {
            const stringA = chunck[index]
            for (let i = index + 1; i < chunck.length; i++) {
                const stringB = chunck[i]
                const anagramExists = checkStringsAnagram(stringA, stringB)
                if (anagramExists) {
                    anagramsCounter++
                }
            }
        })
    })
    return anagramsCounter
}
module.exports = {
    stringMaxLimit, stringSplit, checkChunks
}