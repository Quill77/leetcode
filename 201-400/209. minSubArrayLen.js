/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0;
    let l = 0, r = 0;
    let ans = Infinity;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r++];
        while (sum - nums[l] >= target) {
            sum -= nums[l++];
        }
        ans = Math.min(ans, r - l);
    }
    return ans === Infinity ? 0 : ans;
    //
    //
    // while (sum <= target && r < nums.length) {
    //     sum += nums[r++];
    // }
    // if (r === nums.length) return 0;
    // while (sum - nums[l] >= target) {
    //     sum -= nums[l++];
    // }
    // ans = Math.min(ans, r - l + 1);
    // while (r < nums.length) {
    //
    // }
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))