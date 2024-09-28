/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let n = nums.length;
    if (target <= nums[0]) return 0
    if ((target > nums[n - 1])) return n;

    let left = 0, right = n - 1;
    while (right - left > 1) {
        // const middle = Math.floor((left + right) / 2);
        const middle = ((right - left) >> 1) + left
        if (target <= nums[middle]) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return right;
};

