/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
function _Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    let levelStart = root, parent = null, child = null;
    while (levelStart !== null) {
        parent = levelStart;
        levelStart = null;
        while (parent !== null) {
            if (parent.left) {
                if (!levelStart) levelStart = parent.left;
                else child.next = parent.left;
                child = parent.left;
            }
            if (parent.right) {
                if (!levelStart) levelStart = parent.right;
                else child.next = parent.right;
                child = parent.right;
            }
            parent = parent.next;
        }
    }
    return root;
};

let tree = new _Node(1,
    new _Node(2,
        new _Node(4),
        new _Node(5)),
    new _Node(3,
        null,
        new _Node(7)));
console.log(connect(tree));