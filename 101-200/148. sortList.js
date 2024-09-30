 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {ListNode} from "../utils/ListNode.js";
import {mergeTwoLists} from "../1-100/21. mergeTwoLists.js"

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null || head.next === null) return head
    let fakeHead = new ListNode(0, head)
    let tail = fakeHead, temp = fakeHead
    while (tail.next && tail.next.next) {
        tail = tail.next.next
        temp = temp.next
    }
    let fakeHead2 = new ListNode(0, temp.next)
    temp.next = null
    return mergeTwoLists(sortList(fakeHead.next), sortList(fakeHead2.next))
};
