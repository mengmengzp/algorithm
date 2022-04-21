/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 二维数组初始化为1
    let opt = new Array(m+1).fill(1);
    for (let i = 0; i < opt.length; i++) {
        opt[i] = new Array(n+1).fill(1);
    }
    // 为了方便计算，从最后一行一列进行遍历
    for (let i = m-1; i >0; i--) {
        for (let j = n-1; j > 0; j--) {
            opt[i][j] = opt[i+1][j] + opt[i][j+1];
        }
    }
    return opt[1][1]
};
// @lc code=end

