/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let map = {
        ']': '[',
        '}': '{',
        ')': '(',
    }
    for (let c of s) {
        if (stack.length && stack[stack.length - 1] === map[c])
            stack.pop();
        else
            stack.push(c);
    }
    return !stack.length;
};
