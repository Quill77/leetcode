/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = '';
    let map = new Map([[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]);
    for (let [n, s] of map){
        while (num >= n) {
            res += s;
            num -= n;
            if (num === 0) break;
        }
    }
    return res;
};