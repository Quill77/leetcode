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
var isSymmetric = function (root) {
    var _isOpposite = (root1, root2) => {
        if (!root1 || !root2) return !root1 && !root2
        return root1.val === root2.val && _isOpposite(root1.left, root2.right) && _isOpposite(root1.right, root2.left)
    }
    return _isOpposite(root.left, root.right)
};