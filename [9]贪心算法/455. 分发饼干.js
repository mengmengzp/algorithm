/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 数组sort时需要增加函数
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    let j = 0, res = 0;
    for (let num of s) {
        // 如果饼干大于或等于当前胃口表示够分
        if (num >= g[j]) {
            res++;
            j++;
        }
    }
    return res;
};
// @lc code=end

