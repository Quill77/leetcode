/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let wall = [], m = 0, sum = 0
    for (let i = 0; i < height.length; i++) {
        if (height[i] > height[m]) m = i
        wall[i] = height[m]
    }
    m = height.length - 1
    for (let i = height.length - 1; i >= 0; i--) {
        if (height[i] > height[m]) m = i
        sum += Math.max(0, Math.min(wall[i], height[m]) - height[i])
    }
    return sum
};
console.log(trap([4,2,3]))