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
var maxPathSum = function (root) {
    let max = -1001;
    let dfs = function (root) {
        if (!root) return 0;
        let left = dfs(root.left)
        let right = dfs(root.right)
        let max = Math.max(max, left + right + root.val)
        return Math.max(left + root.val, right + root.val, 0)
    }
    dfs(root)
    return max
};