/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[\W^_]/g, '').toLowerCase();
    console.log(s);
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
};

console.log(isPalindrome('ab_a'));