/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s > t.length) return false;
    let index = 0;
    for (let i of s) {
        while (index < t.length && t[index] !== i) index++;
        if (index > t.length) return false;
    }
    return true;
};