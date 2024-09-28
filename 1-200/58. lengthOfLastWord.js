/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i, searching = false;
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') searching = true;
        else if (searching) break;
    }
    return s.length - 1 - i;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
    return s.trimEnd().split(' ').at(-1).length;
}