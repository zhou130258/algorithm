/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    const len = words.length;
    let min = len;
    let index1 = -1, index2 = -1;
    for (let i = 0; i < len; ++i) {
        const word = words[i];
        if (word1 === word) {
            index1 = i;
        }
        if (word2 === word) {
            index2 = i;
        }
        if (index1 >= 0 && index2 >= 0) {
            min = Math.min(min, Math.abs(index1 - index2));
        }
    }
    return min;
};