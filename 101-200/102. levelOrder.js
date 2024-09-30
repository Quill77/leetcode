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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = []
    putIn([root], res)
    return res
};
/**
 *
 * @param {TreeNode[]} level
 * @param {number[][]} res
 */
var putIn = function (level, res) {
    let nextLevel = [], vals = []
    level.forEach(node => {
        if (node.left) nextLevel.push(node.left)
        if (node.right) nextLevel.push(node.right)
        vals.push(node.val)
    })
    res.push(vals)
    if (nextLevel.length !== 0)
        putIn(nextLevel, res)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder2 = function (root) {
    if (!root) return []
    let level = [root], res = []
    while (level.length !== 0) {
        let nextLevel = [], tempRes = []
        level.forEach(node => {
            if (node.left) nextLevel.push(node.left)
            if (node.right) nextLevel.push(node.right)
            tempRes.push(node.val)
        })
        res.push(tempRes)
        level = nextLevel
    }
    return res
};