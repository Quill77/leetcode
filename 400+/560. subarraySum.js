/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let sums = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i]
    }

    let map = {0: 1}
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        if (map[sums[i] - k]) ans += map[sums[i] - k]
        map[sums[i]] = (map[sums[i]] ?? 0) + 1
    }
    return ans
};
// console.log(subarraySum([1,2,3], 3))
let m = new Map().set(0,1)
console.log(m.get(1))