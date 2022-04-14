/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    let bfs = (root, deep) => {
        if (!root) return;
        if (res.length === deep) {
            res.push([]);
        }
        res[deep].push(root.val);
        // 将放同级
        for (child of root.children) {
            bfs(child, deep + 1);
        }
    }
    bfs(root, 0);
    return res;
};
// @lc code=end

