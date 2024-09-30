/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < (n - 1) / 2; j++) {
            let temp = nums[i][j]
            nums[i][j] = nums[j][n - 1 - i]
            nums[j][n - 1 - i] = nums[n - 1 - i][n - 1 - j]
            nums[n - 1 - i][n - 1 - j] = nums[n - 1 - j][i]
            nums[n - 1 - j][i] = temp
        }
    }
};
const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(nums)
console.log(nums)