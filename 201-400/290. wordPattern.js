/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i])) {
            if (set.has(words[i])) return false;
            map.set(pattern[i], words[i]);
            set.add(words[i]);
        } else if (map.get(pattern[i]) !== words[i]) {
            return false;
        }
    }
    return true;
};