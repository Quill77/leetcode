/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {ListNode} from "../utils/ListNode.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    if (list2.val < list1.val) [list1, list2] = [list2, list1]
    let list3 = new ListNode(-101, list1)
    list1 = list3
    while (list1.next) {
        list1 = list1.next
        if (list1.next && list2 && list2.val < list1.next.val) {
            let next1 = list1.next, next2 = list2.next
            list1.next = list2
            list2.next = next1
            list2 = next2
        }
    }
    if (list2) {
        list1.next = list2
    }
    return list3.next
};

var mergeTwoLists2 = function (list1, list2) {
    if(!list1)return list2
    if(!list2)return list1
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next,list2)
        return list1
    }else{
        list2.next = mergeTwoLists(list1,list2.next)
        return list2
    }
};

let a = new ListNode(1, new ListNode(3, new ListNode(6, new ListNode(7))))
let b = new ListNode(2, new ListNode(4, new ListNode(5, new ListNode(8, new ListNode(9)))))
console.log(mergeTwoLists(a, b))