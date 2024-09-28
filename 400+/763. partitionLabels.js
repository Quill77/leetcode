/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let map = new Map();
    for (let c of s) {
        map.set(c, (map.get(c) ?? 0) + 1);
    }

    let set = new Set();
    let cnt = 0, l = 0, r = 0, ans = [];
    while (r < s.length) {
        let c = s[r++];
        if (!set.has(c)) {
            set.add(c);
            cnt += map.get(c);
        }
        cnt--;
        if (cnt === 0) {
            ans.push(r - l)
            l = r;
        }
    }
    return ans;
};

// partitionLabels('1234564321')