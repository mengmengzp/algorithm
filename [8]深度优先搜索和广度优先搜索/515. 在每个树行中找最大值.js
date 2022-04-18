/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let result = [];
    let dfs = (root, depth) => {
        if (!root) return;
        if (result[depth] !== undefined) {
            result[depth] = Math.max(result[depth], root.val);
        } else {
            result[depth] = root.val;
        }
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return result;
};
// @lc code=end

