/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue
        [nums[i], nums[j]] = [nums[j], nums[i]]
        j++
    }
    // return nums
};
nums = [1, 0, 0, 2, 0, 0, 3, 0, 0, 4, 0, 0, 5]
moveZeroes(nums)
console.log(nums)
