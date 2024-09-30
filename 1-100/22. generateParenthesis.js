/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const ans = [];
    const path = [];
    // balance = 左括号个数 - 右括号个数
    function dfs(i, balance) {
        if (path.length === n) {
            let s = Array(n * 2).fill(')');
            for (const j of path) s[j] = '(';
            ans.push(s.join(""));
            return;
        }
        // 可以填 0 到 balance 个右括号
        for (let close = 0; close <= balance; close++) { // 填 close 个右括号
            path.push(i + close); // 填 1 个左括号
            dfs(i + close + 1, balance - close + 1);
            path.pop();
        }
    }
    dfs(0, 0);
    return ans;
};
generateParenthesis(8)