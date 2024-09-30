/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let left = new Array(n).fill(-1), right = new Array(n).fill(n);


    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[i] < heights[stack.at(-1)]) {
            right[stack.pop()] = i;
        }
        stack.push(i);
    }

    stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[i] < heights[stack.at(-1)]) {
            left[stack.pop()] = i;
        }
        stack.push(i);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    return ans;
};

console.log(largestRectangleArea([2, 4]))