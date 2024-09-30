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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) return true
    return _isValidBST(root, -2e31 - 1, 2e31)
};

var _isValidBST = function (root, left, right) {
    if (!root) return true
    let ans = true
    if (root.left) ans = ans && root.val > root.left.val && root.left.val > left
    if (root.right) ans = ans && root.val < root.right.val && root.right.val < right
    return ans && _isValidBST(root.left, left, root.val) && _isValidBST(root.right, root.val, right)
}

console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))))