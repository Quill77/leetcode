/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();
    while (n !== 1) {
        n = n.toString(10).split('').reduce((pre, cur) => pre + cur * cur, 0);
        if (set.has(n)) return false;
        set.add(n);
    }
    return true;
};
