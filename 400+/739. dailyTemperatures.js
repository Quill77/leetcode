/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length;
    let answer = new Array(n).fill(0);

    let stack = [];

    temperatures.forEach((t, i) => {
        while (stack.length && temperatures[stack.at(-1)] < t) {
            let j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    })
    return answer;
};