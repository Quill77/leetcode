/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (!nums || nums.length <= 1) {
        return;
    }

    let i = nums.length - 2, j = i + 1;

    while (i > -1 && nums[i + 1] <= nums[i]) i--;

    if (i > -1) {
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    i++;
    j = nums.length - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};