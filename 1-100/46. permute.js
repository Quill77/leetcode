/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = [], vis = new Set();
    let backtrack = function (output) {
        if (output.length === nums.length) {
            ans.push([...output]);
        } else {
            nums.forEach(i=>{
                if (vis.has(i)) return;
                vis.add(i);
                output.push(i);
                backtrack(output);
                output.pop();
                vis.delete(i);
            })
        }
    }
    backtrack([]);
    return ans;
};
console.log(permute([1, 2, 3]))