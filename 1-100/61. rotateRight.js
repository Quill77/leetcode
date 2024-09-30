/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null) return null;
    let cur = head, len = 1;
    while (cur.next) {
        cur = cur.next;
        len++;
    }
    cur.next = head;
    let cnt = len - 1 - (k - 1) % len;
    for (let i = 0; i < cnt; i++) {
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    return newHead;
};