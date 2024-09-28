/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = nums[0], min = nums[0], ans = nums[0];
    let ma, mi;
    for (let i = 1; i < nums.length; i++) {
        ma = max;
        mi = min;
        max = Math.max(ma * nums[i], nums[i], mi * nums[i])
        min = Math.min(mi * nums[i], nums[i], ma * nums[i]);
        ans = Math.max(max, ans);
    }
    return ans;
};
