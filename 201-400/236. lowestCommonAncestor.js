/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import {TreeNode} from "../utils/TreeNode.js";

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let dfs = function (root, target) {
        if (!root) return ''
        if (root === target) return 'f'
        let str = dfs(root.left, target)
        if (str) return 'l' + str
        str = dfs(root.right, target)
        if (str) return 'r' + str
    }
    let findSame = function () {
        let pstr = dfs(root, p).slice(0, -1), qstr = dfs(root, q).slice(0, -1)
        let i;
        for (i = 0; i < pstr.length; i++) {
            if (pstr.at(i) !== qstr.at(i)) break;
        }
        return pstr.slice(0, i);
    }
    let str = findSame()
    for (let s of str) {
        root = s === 'l' ? root.left : root.right
    }
    return root
};
var lowestCommonAncestor2 = function (root, p, q) {
    if (root == null) return null
    if (q == root || p == root) return root

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left == null) return right
    if (right == null) return left
    return root
};

let q = new TreeNode(4, null, null)
let p = new TreeNode(
    5,
    null,
    new TreeNode(2, null, q)
)
let root = new TreeNode(
    3,
    p,
    null
)
lowestCommonAncestor(root, p, q)