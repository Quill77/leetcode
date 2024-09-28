/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let res = [], map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    let list = [];
    for (let [key, val] of map) {
        list[val] ??= [];
        list[val].push(key);
    }

    for (let i = list.length - 1; i >= 0 && res.length < k; i--) {
        if (!list[i]) continue;
        res.push(...list[i]);
    }
    return res;
};

