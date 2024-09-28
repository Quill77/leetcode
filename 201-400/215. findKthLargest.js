/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return quickSelect(nums, k - 1);
};


let quickSelect = function (nums, k = 0, l = 0, r = nums.length - 1) {
    if (l === r) return nums[k];
    let x = nums[l], i = l - 1, j = r + 1;
    while (i < j) {
        do i++; while (nums[i] > x);
        do j--; while (nums[j] < x);
        if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    if (k > j) return quickSelect(nums, k, j + 1, r);
    else return quickSelect(nums, k, l, j);
}

let arr = [3, 2, 1, 5, 6, 4]
console.log(quickSelect(arr, 4))
console.log(arr)

