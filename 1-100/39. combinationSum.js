/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let dp = [[[]]];
    let bt = (target) => {
        dp[target] ??= [];
        for (let i = 0; i <= candidates.length; i++) {
            let num = candidates[i], nextTarget = target - num;
            if (nextTarget < 0) return;
            if (!dp[nextTarget]) bt(nextTarget);

            let paths = dp[nextTarget];
            for (let j = 0; j < paths.length; j++) {
                let path = paths[j];
                if (path.length !== 0 && path[path.length - 1] > num) break;
                dp[target].push([...path, num]);
            }
        }
    }
    bt(target, candidates.length - 1);
    return dp[target];
};

console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15))