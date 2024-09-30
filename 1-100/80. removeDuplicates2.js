/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0, index = 0;
    while (i < nums.length) {
        let cur = nums[i], index = i;
        while (nums[i] === cur) {
            i++;
            if (i - index <= 2) nums[index++] = cur;
        }
    }
    return index;
};