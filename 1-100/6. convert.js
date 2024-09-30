/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;
    let res = new Array(numRows).fill('')
    let digit = 2 * (numRows - 1);
    for (let i = 0; i < s.length; i++) {
        let carry = i % digit;
        let position = carry < numRows ? carry : digit - carry;
        res[position] += s[i];
    }
    return res.join('');
};

