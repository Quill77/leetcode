/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    [m, n] = [m + n - 2, Math.min(m - 1, n - 1)];
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= (m - i + 1) / i;
    }
    return res;
};