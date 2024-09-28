/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        res.push(...twoSum(nums, i))
        while (nums[i] === nums[i + 1]) i++
    }
    return res
};
var twoSum = function (nums, position) {
    let res = [], map = {}
    let target = -nums[position]
    let l = position + 1, r = nums.length - 1
    while (r > l) {
        if (nums[r] + nums[l] > target) r--
        else if (nums[r] + nums[l] < target) l++
        else {
            res.push([nums[position], nums[l], nums[r]])
            while (l < r && nums[l] === nums[l + 1]) l++
            while (l < r && nums[r] === nums[r + 1]) r--
            l++
            r--
        }
    }
    return res
}
console.log(threeSum([-2, 0, 1, 1, 2]))