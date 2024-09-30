/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {ListNode} from "../utils/ListNode.js";

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === right) return head;

    let dummy = new ListNode(-1, head);

    let pre = dummy;

    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }

    let current = pre.next;
    let prev = null;

    for (let i = left; i <= right; i++) {
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    pre.next.next = current;
    pre.next = prev;

    return dummy.next;
};