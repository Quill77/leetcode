/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// functional programming (XD

var groupAnagrams = function (strs) {
    return (map = new Map())
        , (getkey = str => Array.from(str).sort().join())
        , (getlist = (key, str) => [...map.get(key) ?? [], str])
        , strs.forEach(str => map.set(key = getkey(str), getlist(key, str)))
        , Array.from(map.values())
};