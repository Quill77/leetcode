/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let stairs = [];
    let climbTo = function (n) {
        if (n === 0 || n === 1) return 1;
        if (stairs[n]) return stairs[n]
        return stairs[n] = climbTo(n - 1) + climbTo(n - 2)
    }
    return climbTo(n);
};