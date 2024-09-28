/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) return null
    let newHead = new _Node(), res = newHead, map = new Map([[head, newHead]])
    while (head) {
        newHead.val = head.val
        if (head.next && !map.has(head.next)) map.set(head.next, new _Node())
        newHead.next = map.get(head.next) ?? null

        if (head.random && !map.has(head.random)) map.set(head.random, new _Node())
        newHead.random = map.get(head.random) ?? null
        head = head.next
        newHead = newHead.next
    }
    return res
};


let n0 = new _Node(7)
let n1 = new _Node(13)
let n2 = new _Node(11)
let n3 = new _Node(10)
let n4 = new _Node(1)
n0.next = n1
n1.next = n2
n2.next = n3
n3.next = n4
n0.random = null
n1.random = n0
n2.random = n4
n3.random = n2
n4.random = n0

console.log(copyRandomList(n0))