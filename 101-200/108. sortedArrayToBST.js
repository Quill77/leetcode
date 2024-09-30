/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {TreeNode} from "../utils/TreeNode.js";

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return _ArrToBST(nums, 0, nums.length)
};
/**
 *
 * @param {number} nums
 * @param {number} left
 * @param {number} right
 * @private
 */
var _ArrToBST = function (nums, left, right) {
    if (right - left === 1) return new TreeNode(nums[left])
    if (right - left === 2) return new TreeNode(nums[left + 1], new TreeNode(nums[left]))
    let mid = Math.floor((right + left) / 2)
    return new TreeNode(nums[mid], _ArrToBST(nums, left, mid), _ArrToBST(nums, mid + 1, right))
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))