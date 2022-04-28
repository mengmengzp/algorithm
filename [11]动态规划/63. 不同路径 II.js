/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0]) return 0;
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    // 初始化二维数组
    let dp = new Array(m).fill(0);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n).fill(0);
    }
    // 第一位设置为1
    dp[0][0] = 1;
    for (let i = 0; i < m ; i++) {
        for (let j = 0; j < n; j++) {
            // 当遇到障碍物及第一个位置时，继续下一个迭代
            if (obstacleGrid[i][j] || (!i && !j)) continue
            // i = 0或者j = 0 时，超出边界，因此直接取0
            dp[i][j] = (i ? dp[i-1][j] : 0) + (j ? dp[i][j-1] : 0)
        }
    }
    return dp[m-1][n-1];
};


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
var uniquePaths = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    // 定义二维数组
    let dp = new Array(m).fill().map(item => Array(n).fill(0));
    // 初始化
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n && obstacleGrid[0][j] === 0 ; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};
// @lc code=end


// @lc code=end


// @lc code=end

