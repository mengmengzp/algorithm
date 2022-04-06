/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */
/**
 * 解题思路
 * 1. 开辟hash，没有就存储，返回长度
 * 2. 双指针从左边第一和第二个位置,如果不相等移动左指针
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            nums[++i] = nums[j];
        }
    }
    return ++i;
};
// @lc code=end

