/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const a = 'a'.charCodeAt(0);
    const chars = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++)
        chars[s.charCodeAt(i) - a]++;
    for (let i = 0; i < s.length; i++)
        if (!chars[t.charCodeAt(i) - a]--) return false;
    return true
};