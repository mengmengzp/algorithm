/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = [];
    let bfs = (root) => {
        if (!root) return;
        for (let child of root.children) {
            bfs(child);
        }
        res.push(root.val);
    }
    bfs(root);
    return res;
};
// @lc code=end

