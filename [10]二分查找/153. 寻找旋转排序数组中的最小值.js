/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        // 中间值比右侧大，则在右侧
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // 中间值比右侧小，则在左侧
            right = mid;
        } else {
            // 如果相等，比较前面一位
            right--;
        }
    }
    return nums[left];
};
// @lc code=end

