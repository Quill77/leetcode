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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fakeHead = new ListNode(0, head)
    let tail = fakeHead
    for (let i = 0; i < n; i++) {
        tail = tail.next
    }
    let target = fakeHead
    while (tail && tail.next) {
        tail = tail.next
        target = target.next
    }
    target.next = target.next.next
    return fakeHead.next
};
let list = new ListNode(1, new ListNode(2))

console.log(removeNthFromEnd(list, 2))