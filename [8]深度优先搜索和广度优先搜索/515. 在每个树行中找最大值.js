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
            // 取当前层最大的值作为该层的元素
            result[depth] = Math.max(result[depth], root.val);
        } else {
            result[depth] = root.val;
        }
        // 递归左子树
        dfs(root.left, depth + 1);
        // 递归右子树
        dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return result;
};
// @lc code=end

