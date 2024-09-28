import {ListNode} from "../utils/ListNode.js";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export var reverseList = function (head) {
    if (head === null || head.next === null) return head
    let tail = reverseList(head.next)
    head.next.next = head
    head.next = null
    return tail
};

var reverseList2 = function (head) {
    if (head == null || head.next == null) {
        return head
    }
    let prev = null, cur = head
    while (cur) {
        let tmp = cur.next
        cur.next = prev
        prev = cur
        cur = tmp
    }
    return prev
}

let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

let a = reverseList2(list)
console.log(a)