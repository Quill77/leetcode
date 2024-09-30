/**
 * @param {number} val
 * @param {ListNode} next
 */
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 *
 * @param {number[]} vals
 * @return {ListNode|null}
 */
ListNode.fromArray = function (vals) {
    if (!vals.length) return null;

    let head = new ListNode(vals[0], null);
    let current = head;

    for (let i = 1; i < vals.length; i++) {
        current.next = new ListNode(vals[i], null);
        current = current.next;
    }

    return head;
};
/**
 *
 * @param {ListNode} head
 * @return {number[]}
 */
ListNode.toArray = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
};