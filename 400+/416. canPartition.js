/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {

    let sum = nums.reduce((a, b) => a + b);
    if (nums.length === 1 || sum % 2 === 1) return false;

    let n = nums.length, m = sum >> 1;
    let dp = new Array(m + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < n; i++) {
        for (let j = m; j > nums[i]; j--) {
            if (dp[j - nums[i]]) dp[j] = true;
        }
    }
    return dp[m];
};

console.log(canPartition([1, 2, 5]))

