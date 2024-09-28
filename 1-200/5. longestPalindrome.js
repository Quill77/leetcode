/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let sn = ['^', '#', ...[...s].join('#'), '#', '$'];
    const p = new Array(sn.length).fill(0);
    let c = 0, r = 0;
    for (let i = 1; i < sn.length - 1; i++) {
        if (i <= r) p[i] = Math.min(r - i, p[2 * c - i]);
        while (sn[i - p[i] - 1] === sn[i + p[i] + 1]) p[i]++;
        if (p[i] + i > r) {
            r = p[i] + i;
            c = i;
        }
    }
    let max = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] > p[max]) max = i;
    }
    console.log(max, p[max]);
    return s.slice((max - p[max]) >> 1, (max + p[max]) >> 1);
};

console.log(longestPalindrome('abcbba'))