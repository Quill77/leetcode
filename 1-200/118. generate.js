/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let ans = [[1]];
    for (let i = 1; i < numRows; i++) {
        ans[i] = [1];
        for (let j = 1; j < i; j++) {
            ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }
        ans[i].push(1);
    }
    return ans;
}


var generate2 = function (numRows) {

    let _generate = function (n) {
        let ans = [1], temp = n - 1;
        for (let i = 1; i < n; i++) {
            ans[i] = ans[i - 1] * temp-- / i;
        }
        return ans;
    }

    return new Array(numRows).fill(0).map((_, i) => _generate(i + 1));
};


console.log(generate(5))