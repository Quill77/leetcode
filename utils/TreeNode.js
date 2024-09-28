/**
 *
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @constructor
 */
export function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}