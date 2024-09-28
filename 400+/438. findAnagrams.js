/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) return []
    let getCharCode = char => char.charCodeAt(0) - 'a'.charCodeAt(0)
    let res = [], map = new Array(26).fill(0)
    p.split('').forEach(c => map[getCharCode(c)]++)
    let l = 0
    for (let r = 0; r < s.length; r++) {
        map[getCharCode(s[r])]--
        while (map[getCharCode(s[r])] < 0) map[getCharCode(s[l++])]++
        if (r - l === p.length - 1) res.push(l)
    }
    return res
};


var findAnagrams2 = function(s, p) {
    const sLen = s.length, pLen = p.length;

    if (sLen < pLen) {
        return [];
    }

    const ans = [];
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    for (let i = 0; i < pLen; ++i) {
        ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
    }

    if (sCount.toString() === pCount.toString()) {
        ans.push(0);
    }

    for (let i = 0; i < sLen - pLen; ++i) {
        --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
        ++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

        if (sCount.toString() === pCount.toString()) {
            ans.push(i + 1);
        }
    }

    return ans;
};
console.log(findAnagrams('acdcaeccde', 'dc'))