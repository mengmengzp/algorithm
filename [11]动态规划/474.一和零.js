/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = Array.from(Array(m+1), () => Array(n+1).fill(0));
    for (let str of strs) {
        let zeroNums = 0, oneNums = 0;
        // 找出0和1的数量
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '0') {
                zeroNums++;
            } else {
                oneNums++;
            }
        }
        for (let i = m; i >= zeroNums; i--) {
            for (let j = n; j >= oneNums; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNums][j-oneNums] + 1);
            }
        }
    }
    return dp[m][n];
};
// @lc code=end

