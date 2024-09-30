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
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0;
    let height = 0, temp = root;
    while (temp) {
        temp = temp.left;
        height++;
    }
    let has = (i) => {
        let temp = root;
        for (let j = 1 << height - 2; j > 0; j >>= 1) {
            if (i & j) temp = temp.right
            else temp = temp.left;
        }
        return !!temp;
    }
    let l = 0, r = 2 ** (height - 1);
    while (r - l > 1) {
        let m = (r + l) >> 1;
        if (has(m)) l = m;
        else r = m;
    }
    return 2 ** (height - 1) + l;
};

let tree = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(
        3,
        // new TreeNode(6),
        null,
        null
    )
)
console.log(countNodes(tree));