/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import {ListNode} from "../utils/ListNode.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head, slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            let fast = head
            while (fast !== slow) {
                fast = fast.next
                slow = slow.next
            }
            return fast
        }
    }
    return null
};
var detectCycle2 = function(head) {
    const visited = new Set()
    while (head !== null) {
        if (visited.has(head)) {
            return head
        }
        visited.add(head)
        head = head.next
    }
    return null
};
let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
list.next.next.next.next = list.next
console.log(detectCycle(list))