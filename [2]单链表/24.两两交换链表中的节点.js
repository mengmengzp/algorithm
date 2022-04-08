/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 若为空或者只有一个元素返回当前元素
    if (!head || !head.next) {
        return head;
    }
    let v1 = head;
    let v2 = head.next;
    let v3 = v2.next;
    v2.next = v1;
    // 递归调用
    v1.next = swapPairs(v3);
    return v2
};
// @lc code=end

