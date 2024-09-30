/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let dp = new Array(s.length).fill(0);
    let ans = 0;
    for (let i = 1; i < s.length; i++) {
        let c = s.at(i);
        if (c === ')') {
            if (s.at(i - 1) === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s.at(i - dp[i - 1] - 1) === '(') {
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2
            }
            ans = Math.max(ans, dp[i]);
        }
    }
    return ans;
};