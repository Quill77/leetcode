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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let last = [root], ans = []
    while (last.length) {
        ans.push(last[last.length - 1].val);
        let next = [];
        last.forEach(node => {
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        });
        last = next;
    }
    return ans
};

var rightSideView2 = function(root) {
    let res = []
    const dfs = (root, depth) => {
        if (!root) return
        if (depth === res.length) res.push(root.val)
        dfs(root.right, depth + 1)
        dfs(root.left, depth + 1)
    }
    dfs(root, 0)
    return res
};