/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let n = nums.length;
    if (target < nums[0]) return [-1, -1]
    if ((target > nums[n - 1])) return [-1, -1];

    let left = -1, right = n;
    while (right - left > 1) {
        const middle = ((right - left) >> 1) + left
        if (target <= nums[middle]) {
            right = middle;
        } else {
            left = middle;
        }
    }
    if (nums[right] !== target) return [-1, -1];
    let left2 = -1, right2 = n;
    while (right2 - left2 > 1) {
        const middle = ((right2 - left2) >> 1) + left2
        if (target < nums[middle]) {
            right2 = middle;
        } else {
            left2 = middle;
        }
    }
    if (nums[left2] !== target) return [-1, -1];
    return [right, left2];
};

searchRange([1], 1)