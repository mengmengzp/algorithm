/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 边界条件判断
    if (!head) return null;
    let current = head;
    // 从1开始遍历
    for (let i = 1; i < k; i++) {
        current = current.next;
        if (!current) return head;
    }
    // 保留指针，防止断链
    let next = current.next;
    current.next = null;
    // 翻转算法
    let reverse = (current) => {
        let pre = null;
        while (current) {
            let next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
    }
    // 翻转前k个元素
    reverse(head);
    // 翻转后head为最后一个指针，防止断链，递归将next指向下次翻转的结果
    head.next = reverseKGroup(next, k);
    
    return current;
}