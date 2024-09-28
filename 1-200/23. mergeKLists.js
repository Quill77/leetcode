/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {mergeTwoLists} from "./21. mergeTwoLists.js";

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    while (lists.length > 1) {
        lists.push(mergeTwoLists(lists.shift(), lists.shift()))
    }
    return lists[0]
};