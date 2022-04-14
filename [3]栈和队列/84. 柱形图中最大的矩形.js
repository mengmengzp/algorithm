/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    // 将最大值放栈中
    let stack = [];
    // 为了方便计算，两边补0
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
        while( stack.length && heights[stack[stack.length -1]] > heights[i]) {
            // 当遇到比栈顶小的元素出栈
            let j = stack.pop();
            // 比较前
            maxArea = Math.max((i - stack[stack.length-1] -1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};
// @lc code=end

