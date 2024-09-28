/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let ans = 0
    while (left < right) {
        let h1 = height[left], h2 = height[right], len = right - left, area
        if (h1 < h2) {
            area = len * h1
            left++
        } else {
            area = len * h2
            right--
        }
        ans = Math.max(ans, area)
    }
    return ans
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))