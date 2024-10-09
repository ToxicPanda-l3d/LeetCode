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
    // Initialize a dummy node to simplify result list creation.
    let dummyHead = new ListNode(0);

    // 'curr' is used to traverse and build the result list, starting from dummyHead.
    let curr = dummyHead;

    // 'carry' will store the carry-over when sum of two digits exceeds 9.
    let carry = 0;

    // Traverse both linked lists until all nodes are processed and carry is 0
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get values from the current nodes of l1 and l2 (or 0 if the list is exhausted)
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;

        // Compute the sum of the current digits and the carry
        let sum = carry + x + y;

        // Update the carry for the next iteration (sum could be >= 10)
        carry = Math.floor(sum / 10);

        // Create a new node with the current digit (sum % 10) and link it to the result
        curr.next = new ListNode(sum % 10);

        // Move 'curr' to the newly created node
        curr = curr.next;

        // Advance l1 and l2 to the next nodes, if they exist
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    
    // Return the head of the result list, skipping the dummy node
    return dummyHead.next;
};
