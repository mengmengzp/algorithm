/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *题目链接：https://leetcode-cn.com/problems/container-with-most-water/comments/
 * [11] 盛最多水的容器
 */
// 解题思路
/**
 * 1. 暴力遍历法，时间复杂度O(n^2)
 * 2. 双指针移动法 o(n)
 */
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    for (let i = 0, j = height.length -1; i < j;) {
        // 选择最小高度，当左边大时，右指针往前移动，反之左指针移动
        let minHeight = height[i] > height[j] ? height[j--] : height[i++];
        maxArea = Math.max(maxArea, (j - i + 1) * minHeight);
    }
    return maxArea;
};
// @lc code=end

