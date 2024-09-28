/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length;
    let left, right;
    if (nums[0] > nums[n - 1]) {
        [left, right] = binsearch(nums, 0, n - 1, (middle, left) => nums[left] <= nums[middle]);
        [left, right] = target >= nums[0] ? [0, left] : [right, n - 1]
    } else
        [left, right] = [0, n - 1];
    if (target === nums[right]) return right;
    left = binsearch(nums, left, right, target)[0]
    return nums[left] === target ? left : -1;
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
console.log(typeof null)