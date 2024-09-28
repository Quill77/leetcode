/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let ans = 0;

    function getDepth(root) {
        if (!root) return 0;
        let l = getDepth(root.left)
        let r = getDepth(root.right)
        ans = Math.max(ans, l + r + 1)
        return Math.max(l, r) + 1
    }

    getDepth(root)
    return ans - 1
};