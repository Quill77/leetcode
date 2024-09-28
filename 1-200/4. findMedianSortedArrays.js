/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let total = m + n;

    return total % 2 === 1 ?
        getKthElement(nums1, nums2, (total >> 1) + 1) :
        (getKthElement(nums1, nums2, total >> 1) +
            getKthElement(nums1, nums2, (total >> 1) + 1)) / 2.0;
}

function getKthElement(nums1, nums2, k) {
    let m = nums1.length, n = nums2.length;
    let i1 = 0, i2 = 0;

    while (true) {
        // 边界情况
        if (i1 === m) {
            return nums2[i2 + k - 1];
        }
        if (i2 === n) {
            return nums1[i1 + k - 1];
        }
        if (k === 1) {
            return Math.min(nums1[i1], nums2[i2]);
        }

        // 正常情况
        let half = k >> 1;
        let newi1 = Math.min(i1 + half, m) - 1;
        let newi2 = Math.min(i2 + half, n) - 1;
        let p1 = nums1[newi1], p2 = nums2[newi2];
        if (p1 <= p2) {
            k -= (newi1 - i1 + 1);
            i1 = newi1 + 1;
        } else {
            k -= (newi2 - i2 + 1);
            i2 = newi2 + 1;
        }
    }
}


findMedianSortedArrays([1, 2], [3, 4],);
