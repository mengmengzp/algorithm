/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let dfs = (i ,j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        // 向左扩散
        dfs(i-1, j);
        // 向下扩散
        dfs(i, j-1);
        // 向右扩散
        dfs(i+1, j);
        // 向上扩散
        dfs(i, j+1);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};
// @lc code=end

