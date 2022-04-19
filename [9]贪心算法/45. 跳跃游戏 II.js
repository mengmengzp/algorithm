/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length - 1, min = 0, max = 0, b = 0;
    for (let i = 0; i < len; i++) {
        max = Math.max(max, nums[i] + i);
        if (i === b) {
            b = max;
            min++;
        }
    }
    return min;
};
// @lc code=end

