/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    // 慢指针
    let slow = head;
    // 快指针
    let fast = head;
    while(fast.next && fast.next.next) {
        // 慢指针走一步
        slow = slow.next;
        // 快指针走两步
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
// @lc code=end

