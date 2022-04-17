/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let dfs = (queensColumns, row) => {
        if (row === n) {
            result.push(queensColumns.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n-col-1)));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!queensColumns.some((qcol, qrow) => qcol === col || Math.abs(qcol - col) === Math.abs(qrow - row))) {
                queensColumns.push(col);
                dfs(queensColumns, row + 1);
                queensColumns.pop();
            }
        }
    }
    dfs([], 0);
    return result;
};
// @lc code=end

