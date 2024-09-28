/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const a = 'a'.charCodeAt(0);
    const chars = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        chars[magazine.charCodeAt(i) - a]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!chars[ransomNote.charCodeAt(i) - a]--) return false;
    }
    return true;
};
