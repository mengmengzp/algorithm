/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    // 单链表空判断
    if (!head) return null;
    // 设置空指针
    let prev = null;
    while(head) {
        // 保留下一个结点
        let next = head.next;
        // 将头指针指向null
        head.next = prev;
        // prev挪到头指针
        prev = head;
        // 头指针挪到下一个指针，防止丢失
        head = next;
    }
    return prev;
};
// @lc code=end

