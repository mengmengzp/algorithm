/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let dfs = (root, depth) => {
        if (!root) return;
        if (result.length === depth) {
            result.push([]);
        }
        result[depth].push(root.val);
        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return result;
};
// @lc code=end

