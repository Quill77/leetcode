/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = {}
    t.split('').forEach(c => map[c] = (map[c] ?? 0) + 1)
    let cnt = t.length, l = 0, ans
    for (let r = 0; r < s.length; r++) {
        if (map[s[r]] !== void 0 && map[s[r]]-- > 0) cnt--
        if (cnt > 0) continue
        while (cnt === 0) {
            ans = ans && r - l >= ans.length ? ans : s.slice(l, r + 1)
            if (map[s[l]] !== void 0 && ++map[s[l]] > 0) cnt++
            l++
        }
    }
    return ans ?? ''
};
console.log(minWindow('acbbaca', 'aba'))