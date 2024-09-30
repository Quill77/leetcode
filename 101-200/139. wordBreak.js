/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let reach = [];
    let _wordBreak = function (s, wordDict, index = 0) {
        if (reach[index]) return false;
        reach[index] = true;
        if (index === s.length) return true;
        let nextstep = []
        for (let word of wordDict) {
            if (s.slice(index, index + word.length) === word) {
                nextstep.push(word.length);
            }
        }
        for (let len of nextstep) {
            if (_wordBreak(s, wordDict, index + len)) return true;
        }
        return false;
    }

    return _wordBreak(s, wordDict.sort((a, b) => b.length - a.length));
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak2 = (s, wordDict) => {
    const n = s.length;
    const set = new Set(wordDict);//将wordDict转化成set，方便查找
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};