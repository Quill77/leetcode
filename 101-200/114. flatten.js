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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return null
    let fakeHead = new TreeNode(), cur = fakeHead;
    let dfs = function (root) {
        let l = root.left, r = root.right
        root.left = null;
        root.right = null
        cur.right = root
        cur = cur.right
        if (l) dfs(l)
        if (r) dfs(r)
    }
    dfs(root)
    return fakeHead.right
};


flatten(new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(
            3,
            null,
            null
        ),
        new TreeNode(
            4,
            null,
            null
        )
    ),
    new TreeNode(
        5,
        null,
        new TreeNode(
            6,
            null,
            null
        )
    )
))