/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];
    let backtrack = function (i, output) {
        if (i === nums.length) ans.push([...output]);
        else {
            backtrack(i + 1, output);
            output.push(nums[i]);
            backtrack(i + 1, output)
            output.pop();
        }
    }
    backtrack(0, []);
    return ans;
};

console.log([].push(1, 2, 3))