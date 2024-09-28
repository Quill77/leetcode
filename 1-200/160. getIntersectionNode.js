/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let lengthA = 0, lengthB = 0;
    let tempA = headA, tempB = headB
    while (tempA.next) {
        tempA = tempA.next
        lengthA++
    }
    while (tempB.next) {
        tempB = tempB.next
        lengthB++
    }
    if (tempA !== tempB) return null
    tempA = headA
    tempB = headB
    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA - lengthB; i++) {
            tempA = tempA.next
        }
    } else {
        for (let i = 0; i < lengthB - lengthA; i++) {
            tempB = tempB.next
        }
    }
    while (tempA !== tempB) {
        tempA = tempA.next
        tempB = tempB.next
    }
    return tempA
};