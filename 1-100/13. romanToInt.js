/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let arr = [...s].map(i => map[i]), n = s.length;

    let res = 0
    for (let i = 0; i < n; i++) {
        let cur = arr[i], next =arr[i+1];
        if (next && cur < next) {
            i++;
            res += next - cur;
        } else {
            res += cur;
        }
    }
    return res;
};

