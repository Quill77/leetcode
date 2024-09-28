/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let l = 0, r = 0;
    let step = 0;
    while (r < nums.length - 1) {
        step++;
        let next = 0;
        for (let i = l; i < r + 1; i++) {
            next = Math.max(next, nums[i] + i);
        }
        [l, r] = [r + 1, next];
    }
    return step
};

var jump2 = function (nums) {
    let max = 0
    let step = 0
    let prevStep = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > prevStep) {
            step++;
            prevStep = max
        }
        max = Math.max(max, i + nums[i])
    }
    return step
};