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
var sumNumbers = function (root) {
    let sum = 0;
    let givenum = (root, num) => {
        if (!root) return;
        num = num*10 + root.val;
        if (!root.left && !root.right) {
            sum += num;
        }
        givenum(root.left, num);
        givenum(root.right, num);
    }
    givenum(root, 0);
    return sum;
};