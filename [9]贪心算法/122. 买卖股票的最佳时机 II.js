/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        // 如果当天比前一天大，就锁住收益
        if (prices[i] > prices[i-1]) {
            max += Math.max(prices[i] - prices[i-1]);
        }
    }
    return max;
};
// @lc code=end

