/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let n = matrix.length * matrix[0].length;
    let get = (i) => matrix[Math.floor(i / matrix[0].length)][i % matrix[0].length];
    if (target < get(0)) return false;
    if (target > get(n - 1)) return false;
    if (target === get(n - 1)) return true;

    let left = 0, right = n - 1;
    while (right - left > 1) {
        const middle = ((right - left) >> 1) + left

        if (target < get(middle)) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return get(left) === target;
};

