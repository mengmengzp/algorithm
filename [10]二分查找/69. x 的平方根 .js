/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 左边界
    let left = 1;
    // 有边界
    let right = Math.floor (x/2) + 1;
    while (left <= right) {
        let mid = Math.floor((left + right) /2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};
// @lc code=end

