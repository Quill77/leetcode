/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let n = nums.length
    for (let i = 0; i < n; i++) {
        while (true) {
            let target = nums[i]
            if (target <= 0 || target > n || nums[target - 1] === target) break;
            nums[i] = nums[target - 1]
            nums[target - 1] = target
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1
    }
    return n + 1
};

console.log(firstMissingPositive([3, 4, -1, 1]))