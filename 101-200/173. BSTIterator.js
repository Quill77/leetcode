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
 */
var BSTIterator = function (root) {
    this.queue = []
    let _bfs = (root) => {
        if (!root) return;
        _bfs(root.left);
        this.queue.push(root);
        _bfs(root.right);
    }
    _bfs(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.queue.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.queue.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */