/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum = 0;
    for (let num of nums) {
        if (sum < 0) {
            sum = 0;
        }
        sum += num;
        max = Math.max(max, sum);
    }
    return max;
};
// @lc code=end

