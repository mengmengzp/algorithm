/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

/**
 * 解题思路
 * 从最后一位执行+1
 * 判断是否大于9，若大于9将该项设为0
 * 前面一位继续执行+1
 * 循环一遍没有退出，在在首位补充1返回
 */
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits
        }
    }
    digits.unshift(1);
    return digits;

};