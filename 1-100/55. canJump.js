/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let distance = 0;
    for (let i = 0; i < nums.length; i++) {
        if (distance < i) return false;
        distance = Math.max(distance, nums[i] + i);
    }
    return true;
};