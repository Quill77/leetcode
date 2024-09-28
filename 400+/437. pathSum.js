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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let map = new Map();
    map.set(0, 1);
    let ans = 0;
    let dfs = function (root, sum) {
        if (!root) return;
        sum += root.val;

        let target = sum - targetSum;
        if (map.has(target)) ans += map.get(target);

        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
        dfs(root.left, sum)
        dfs(root.right, sum)
        map.set(sum, map.get(sum) - 1);
    }
    dfs(root, 0);
    return ans
};

pathSum(
    new TreeNode(
        5,
        new TreeNode(
            4,
            new TreeNode(
                11,
                new TreeNode(7, null, null),
                new TreeNode(2, null, null)
            ),
            null
        ),
        new TreeNode(
            8,
            new TreeNode(
                13,
                new TreeNode(5, null, null),
                new TreeNode(1, null, null)
            ),
            new TreeNode(4, null, null)
        )
    ),
    22
)