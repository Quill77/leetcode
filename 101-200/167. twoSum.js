/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (numbers[left] + numbers[right] !== target) {
        while (numbers[left] + numbers[right] < target) left++;
        while (numbers[left] + numbers[right] > target) right--;
    }
    return [left + 1, right + 1];
};