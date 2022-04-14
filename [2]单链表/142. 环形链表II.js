/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    // 单链表为空情况
    if (!head) return null;
    // 慢指针
    let slow = head;
    // 快指针
    let fast = head;
    while(fast.next && fast.next.next) {
        // 慢指针走一步
        slow = slow.next;
        // 快指针走两步
        fast = fast.next.next;
        // 如果有环
        if (slow === fast) {
            // 将慢指针挪到头部
            slow = head;
            // 慢指针和快指针不相等时，分别走一步
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};
// @lc code=end

