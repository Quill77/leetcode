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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head), cur = dummy;
    while (cur){
        while (cur.next && cur.next.next && cur.next.next.next && cur.next.val === cur.next.next.val && cur.next.next.val === cur.next.next.next.val){
            cur.next = cur.next.next;
        }
        if (cur.next && cur.next.next && cur.next.val === cur.next.next.val){
            cur.next = cur.next.next.next;
            continue;
        }
        cur = cur.next;
    }
    return dummy.next;
};