import {ListNode} from "../utils/ListNode.js";
import {reverseList} from "./206. reverseList.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let temp = head, mid = head
    while (temp !== null && temp.next !== null) {
        temp = temp.next.next
        mid = mid.next
    }
    mid = reverseList(mid)
    while (true) {
        if (!mid) return true
        if (head.val !== mid.val) return false
        head = head.next
        mid = mid.next
    }
};
let list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
console.log(isPalindrome(list))
