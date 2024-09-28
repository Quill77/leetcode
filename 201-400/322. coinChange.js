/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let n = coins.length;
    let ans = new Array(amount + 1).fill(Infinity);
    ans[0] = 0;
    for (let i = 0; i < amount + 1; i++) {
        for (let j = 0; j < n; j++) {
            if (i - coins[j] < 0) continue;
            ans[i] = Math.min(ans[i], ans[i - coins[j]] + 1);
        }
    }
    return ans[amount] === Infinity ? -1 : ans[amount];
};

console.log(coinChange([1, 2, 5], 11))
