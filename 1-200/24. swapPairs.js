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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let fakeHead = new ListNode(0, head), res = fakeHead
    while (fakeHead.next && fakeHead.next.next) {
        let node1 = fakeHead.next, node2 = fakeHead.next.next
        node1.next = node2.next
        node2.next = node1
        fakeHead.next = node2
        fakeHead = node1
    }
    return res.next
};