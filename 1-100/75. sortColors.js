/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let a = 0, b = 0;
    nums.forEach(i => {
        if (i === 0) a++;
        else if (i === 1) b++;
    })
    for (let i = 0; i < nums.length; i++) {
        nums[i] = i < a ? 0 : i < a + b ? 1 : 2;
    }
};

