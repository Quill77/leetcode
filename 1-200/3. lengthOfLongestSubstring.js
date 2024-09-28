/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let l = 0, ans = 0
    for (let r = 0; r < s.length; r++){
        while (set.has(s[r])) {
            set.delete(s[l])
            l++
        }
        set.add(s[r])
        ans = Math.max(ans, set.size)
    }
    return ans
};
console.log(lengthOfLongestSubstring('hello world!'))