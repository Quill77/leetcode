/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let n = nums.length;
    let left, right;
    return nums[0] < nums[n - 1] ? nums[0] :
        nums[binsearch(nums, 0, n - 1, (middle, left) => nums[left] <= nums[middle])[1]];
};

let binsearch = function (nums, left, right, target) {
    let condition;
    if (typeof target === 'number') condition = middle => target >= nums[middle];
    else if (typeof target === 'function') condition = target
    else throw Error('wrong target');
    while (right - left > 1) {
        const middle = ((right - left) >> 1) + left
        if (condition(middle, left, right)) {
            left = middle;
        } else {
            right = middle;
        }
    }
    return [left, right];
}