/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

/**
 * 解题思路
 * 1. 递归
 * 2. hash存储中间结果（记忆化搜索）
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let map = new Map();
var climbStairs = function(n) {
    if (map.has(n)) {
        return map.get(n);
    }
    if (n === 1) {
        map.set(n ,1);
    } else if (n === 2) {
        map.set(n ,2);
    } else {
        map.set(n, climbStairs(n-1) + climbStairs(n-2))
    }
    return map.get(n);
};
 // @lc code=end
