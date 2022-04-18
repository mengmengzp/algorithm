/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let generate = (left, right, s) => {
        // 终止条件
        if (s.length === 2 * n) {
            res.push(s);
            return;
        }
        // 递归
        if (left < n) {
            generate(left+1, right, s+'(');
        }
        if (right < left) {
            generate(left, right+1, s+')');
        }
    }
    generate(0, 0,'');
    return res;
};
// @lc code=end

