/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const ops = [1];
    let sign = 1;

    let ret = 0;
    // const n = s.length;
    // let i = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue
        if (s[i] === '+') sign = ops[ops.length - 1];
        else if (s[i] === '-') sign = -ops[ops.length - 1];
        else if (s[i] === '(') ops.push(sign);
        else if (s[i] === ')') ops.pop();
        else {
            let num = parseInt(s.substring(i))
            ret += sign * num;
            while (num > 1) {
                num = num / 10;
                i++;
            }
        }
    }
    return ret;
};
