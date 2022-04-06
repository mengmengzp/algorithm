
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * [15] 三数之和
 */
// 解题思路
/**
 * 1. 先排序，再利用双指针移动法，时间复杂度 o(n)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 对数组进行排序
    let arrSOrt = nums.sort((a,b) => a - b);
    // 结果数组
    let result = [];
    for (let i = 0; i<nums.length; i++) {
        // 去重
        if (i > 0 && arrSOrt[i] === arrSOrt [i - 1])
            continue;
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            let sum = arrSOrt[i] + arrSOrt[left] + arrSOrt[right];
            if (sum === 0) {
                result.push([arrSOrt[i], arrSOrt[left], arrSOrt[right]]);
                // 去重
                while(left < right && arrSOrt[left] === arrSOrt[left+1]) left++;
                while(left < right && arrSOrt[right] === arrSOrt[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};