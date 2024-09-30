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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let dummy = new ListNode(0, head), point = dummy, cur = dummy;
    while (cur.next.val < x) {
        point = point.next;
        cur = cur.next;
    }
    while (cur) {
        if (cur.next && cur.next.val < x) {
            let n = cur.next;
            cur.next = cur.next.next;
            n.next = point.next;
            point.next = n;
            point = n;
            continue;
        }
        cur = cur.next;
    }
    return dummy.next;
};


let list = ListNode.fromArray([1, 4, 3, 2, 5, 2]);
console.log(ListNode.toArray(partition(list, 3)));