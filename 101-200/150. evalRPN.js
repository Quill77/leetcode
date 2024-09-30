/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let map = {
        "+": (a, b) => b + a,
        "-": (a, b) => b - a,
        "*": (a, b) => b * a,
        "/": (a, b) => Math.trunc(b / a),
    }
    for (const token of tokens) {
        if (token in map) {
            stack.push(map[token](stack.pop(), stack.pop()));
        } else {
            stack.push(+token);
        }
    }
    return stack[0];
};