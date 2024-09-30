/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let min = 0, sum = 0, ans = -10e4 + 1
    for (let i of nums) {
        sum += i
        ans = Math.max(ans, sum - min)
        min = Math.min(min, sum)
    }
    return ans
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))