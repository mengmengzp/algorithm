/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */
/**
 * 解题思路
 * 1. 创建新的数组，将k位放到数组中，再拼接，不符合就地
 * 2. 翻转数组，先整体翻转，再前k个元素翻转，再后面翻转
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // k需要取模，防止超过数组长度
    k %= nums.length;
    // 翻转函数
    let reverse = (i, j) => {
        while(i <j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    reverse(0, nums.length-1);
    reverse(0,k-1);
    reverse(k, nums.length-1);
};
// @lc code=end

