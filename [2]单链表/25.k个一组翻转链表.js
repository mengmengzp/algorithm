/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) return head;
    let tail = head;
    for (let i = 1; i < k; i++){
        tail = tail.next;
        if (!tail) return head;
    }
    let next = tail.next;
    tail.next = null;
    reverse(head);
    head.next = reverseKGroup(next, k);
    return tail;
}

let reserse = (head) => {
    let prev = null;
    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp; 
    }
}
// @lc code=end

