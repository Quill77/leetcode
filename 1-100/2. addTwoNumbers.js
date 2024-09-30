/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    l1.val += l2.val
    if (l1.val >= 10) {
        l1.val -= 10
        if (!l1.next) l1.next = new ListNode(1)
        else {
            l1.next.val++
            l2.next ??= new ListNode(0)
        }
    }
    l1.next = addTwoNumbers(l1.next, l2.next)
    return l1
};