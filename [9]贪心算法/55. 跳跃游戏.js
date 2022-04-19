/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 只有一个元素，直接返回true
    if (nums.length === 1) return true;
    // 覆盖下标
    let cover = 0;
    for (let i = 0; i <= cover; i++) {
        // 重置最大覆盖范围
        cover = Math.max(cover, nums[i] + i);
        // 若最大范围大于数组长度，一定能跳到最后
        if (cover >= nums.length - 1) {
            return true;
        }
    }
    return false;
};
// @lc code=end

