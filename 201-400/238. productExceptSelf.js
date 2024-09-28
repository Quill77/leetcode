/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length;
    const ans = [];
    const start = new Array(len).fill(1);
    const end = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        start[i] = start[i - 1] * nums[i - 1];
    }
    for (let i = len - 2; i >= 0; i--) {
        end[i] = end[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < len; i++) {
        ans[i] = start[i] * end[i];
    }
    return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]))