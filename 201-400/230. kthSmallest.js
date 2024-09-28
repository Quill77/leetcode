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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ans = -1;
    let _kthSmallest = function (root) {
        if (!root || ans !== -1) return;
        _kthSmallest(root.left);
        if (--k === 0) ans = root.val;
        _kthSmallest(root.right);
    }
    _kthSmallest(root);
    return ans;
};

let tree = new TreeNode(
    3,
    new TreeNode(
        1,
        null,
        new TreeNode(2, null, null)
    ),
    new TreeNode(4, null, null)
)
console.log(kthSmallest(tree, 3))