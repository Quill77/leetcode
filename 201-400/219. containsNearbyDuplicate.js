/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const pre = nums[i - k], cur = nums[i];
        if (set.has(cur)) return true;
        set.add(cur);
        if (pre !== undefined) set.delete(pre);
    }
};
