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
    let [prev, current] = [null, head];
    while (current) {
        [current.next, prev, current] = [prev, current, current.next];
        // 数组解构可以省略中间变量，等价于下面
        // let temp = current.next;
        // current.next = prev;
        // prev = current;
        // current = temp;
    }
    return prev;
};

