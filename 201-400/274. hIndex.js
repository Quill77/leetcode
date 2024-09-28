/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let n = citations.length;
    let votes = new Array(n + 1).fill(0);
    citations.forEach(i => votes[i > n ? n : i]++);
    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += votes[i];
        if (sum >= i) return i;
    }
    return 0;
};

