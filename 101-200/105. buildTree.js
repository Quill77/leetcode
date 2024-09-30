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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) return null;
    let ans = new TreeNode(-3001);
    let stack = [ans];
    let index = 0;
    for (let i of preorder) {
        let node = stack[stack.length - 1]
        if (node.val !== inorder[index]) {
            node.left = new TreeNode(i);
            stack.push(node.left);
        } else {
            while (stack[stack.length - 1].val === inorder[index]) {
                node = stack.pop();
                index++;
            }
            node.right = new TreeNode(i)
            stack.push(node.right)
        }
    }
    return ans.left;
};

buildTree(
    [0, 1, 2, 9, 10, 3, 4, 5, 6, 7, 8],
    [0, 10, 9, 2, 4, 6, 7, 5, 8, 3, 1]
)