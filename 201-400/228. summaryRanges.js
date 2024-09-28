/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const ranges = [];
    let left = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            ranges.push(left === nums[i] ? left.toString() : left.toString() + '->' + nums[i]);
            left = nums[i + 1];
        }
    }
    return ranges;

};