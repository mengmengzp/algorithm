/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    let row = 0;
    let col = matrix[0].length -1;
    while (col >= 0 && row <= matrix.length - 1) {
        // 通过与每行最后一个对比，作为mid边界条件
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) {
            // 当前行最后一个小于target，则row++，否则col--
            row++
        } else {
            col--
        }
    }
    return false;
};
// @lc code=end

