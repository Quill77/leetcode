/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let f = [nums[0]];

    const binarySearch = (x) => {
        let left = 0,
            right = f.length;

        while (left < right) {
            let mid = left + ((right - left) >> 1);

            if (f[mid] < x) {
                left = mid + 1;
            } else {
                right = mid
            }
        }

        return left;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > f[f.length - 1]) {
            f.push(nums[i]);
        } else {
            f[binarySearch(nums[i])] = nums[i];
        }
    }

    return f.length;
};