/**
 * @param {number} val
 * @param {ListNode} next
 */
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

ListNode.fromArray = function(vals) {
    if (!vals.length) return null;

    let head = new ListNode(vals[0]);
    let current = head;

    for (let i = 1; i < vals.length; i++) {
        current.next = new ListNode(vals[i]);
        current = current.next;
    }

    return head;
};