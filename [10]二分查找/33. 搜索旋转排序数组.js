/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[left] <= nums[mid]) {
            // 左边升序
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // 右边升序
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

