/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let i = 0;
    let numStack = [], strStack = [''];
    while (i < s.length) {
        let c = s.charAt(i++);
        if (c >= '0' && c <= '9') {
            let num = 0;
            while (c >= '0' && c <= '9') {
                num = num * 10 + +c;
                c = s.charAt(i++);
            }
            numStack.push(num);
            strStack.push('');
            continue;
        }
        if (c >= 'a' && c <= 'z') {
            let str = '';
            while (c >= 'a' && c <= 'z') {
                str += c;
                c = s.charAt(i++);
            }
            i--;
            strStack[strStack.length - 1] += str;
            continue;
        }
        if (c === ']') {
            let str = strStack.pop(), num = numStack.pop();
            strStack[strStack.length - 1] += str.repeat(num);
        }
    }
    return strStack[0];
};


var decodeString2 = function (s) {
    let numStack = [];
    let strStack = [];
    let count = 0;
    let ans = '';
    for (let c of s) {
        if (!isNaN(c)) {
            count = count * 10 + parseInt(c);
        } else if (c === '[') {
            numStack.push(count);
            count = 0;
            strStack.push(ans);
            ans = ''
        } else if (c === ']') {
            const times = numStack.pop();
            ans = strStack.pop() + ans.repeat(times);
        } else {
            ans += c;
        }
    }
    return ans;
};
console.log(decodeString('2[abc]3[cd]ef'))