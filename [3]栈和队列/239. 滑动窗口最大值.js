/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let max = [];
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        while(stack.length && nums[stack[stack.length-1]] <= nums[i]) {
            stack.pop();
        }   
        stack.push(i);
        if (stack[0] === i - k) {
            stack.shift();
        }
        if (i >= k -1) {
            max.push(nums[stack[0]]);
        }
    }
    return max;
};
// @lc code=end

