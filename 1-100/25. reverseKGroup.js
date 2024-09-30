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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let fakeHead = new ListNode(0, head), res = fakeHead
    while (true) {
        let next = hasNextGroup(fakeHead, k)
        if (!next) break
        fakeHead = reverse(fakeHead, k)
    }
    return res.next
};

var hasNextGroup = function (head, k) {
    for (let i = 0; i < k; i++) {
        head = head.next
        if (!head) return null
    }
    return head
}

var reverse = function (head, k) {
    let reversing = head.next, tail = head.next
    for (let i = 0; i < k; i++) {
        let temp1 = head.next, temp2 = reversing.next
        head.next = reversing
        reversing.next = temp1
        reversing = temp2
    }
    tail.next = reversing
    return tail
}

var reverseKGroup2 = function (head, k) {
    if (k <= 1 || !head) return head

    let tail = head
    for (let count = 1; count < k; count++) {
        tail = tail.next
        if (!tail) return head
    }

    let cur = head, pre = null
    while (pre !== tail) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    head.next = reverseKGroup2(cur, k)
    return pre
};

let list = ListNode.fromArray([1, 2, 3, 4, 5])
console.log(reverseKGroup(list, 3))