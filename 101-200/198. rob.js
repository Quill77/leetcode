/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    if (nums.length === 3) return Math.max(nums[0] + nums[2], nums[1]);
    let money = [nums[0], nums[1], nums[0] + nums[2]];
    for (let i = 3; i < nums.length; i++) {
        money[i] = Math.max(money[i - 3] + nums[i], money[i - 2] + nums[i], money[i - 1]);
    }
    return money[nums.length - 1];
};