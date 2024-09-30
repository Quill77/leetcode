/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0;
    let next = [-1];
    for (let i = 1, j = 0; i < needle.length; i++) {
        while (j > 0 && needle[i] !== needle[j]) j = next[j - 1] + 1;
        if (needle[i] === needle[j]) j++;
        next[i] = j - 1;
    }

    for (let i = 0, j = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1] + 1;
        if (haystack[i] === needle[j]) j++;
        if (j === needle.length) return i - needle.length + 1;
    }
    return -1;
};

