/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    return (s = new Set(nums))
        && (res = 1)
        && (getend = i => s.has(i) ? getend(i + 1) : i)
        && (getlen = i => getend(i) - i)
        && (haslast = i => s.has(i - 1))
        && (setmax = i => res = Math.max(res, getlen(i)))
        && (donothing = () => 1)
        && s.forEach(i => haslast(i) ? donothing() : setmax(i))
        && false
        || res
};
// s = new Set([100, 4, 200, 1, 3, 2])
// res = 1
// loop = i => s.has(i) ? loop(i + 1) : i
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))