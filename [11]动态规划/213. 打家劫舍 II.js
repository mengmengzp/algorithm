/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    let result1 = robChange(nums, 0, n-2);
    let result2 = robChange(nums, 1, n-1);
    return Math.max(result1, result2);
};

var robChange = (nums, start, end) => {
    if (start === end) return nums[start];
    let dp = new Array(nums.length).fill(0);
    dp[start] = nums[start];
    dp[start+1] = Math.max(nums[start+1], nums[start]);
    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }
    return dp[end];
}
// @lc code=end

