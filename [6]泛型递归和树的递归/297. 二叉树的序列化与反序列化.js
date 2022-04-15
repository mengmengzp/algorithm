/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = [];
    let go = (root) => {
        if (root === null) {
            result.push(null);
            return;
        }
        result.push(root.val);
        go(root.left);
        go(root.right);
    }
    go(root);
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let go = () => {
        if (data.length === 0) {
            return null;
        }
        let val = data.shift();
        if (val === null) return null;
        let node = new TreeNode(val);
        node.left = go();
        node.right = go();
        return node;
    }
    return go();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

