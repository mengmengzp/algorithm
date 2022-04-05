/*
 * @lc app=leetcode.cn id=1 lang=javascript
 * 题目链接： https://leetcode-cn.com/problems/two-sum/
 * [1] 两数之和
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法一：暴力遍历（时间复杂度O（n^2））
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (a[i] + a[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}

// 方法二: hash（O(n)）
var twoSum = function(nums, target) {
    // 定义一个对象存储当前项和对应的下标
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let result = target - nums[i];
        // 对象中是否包含目标值，没有进行存储
        if (map.hasOwnProperty(result)) {
            return [map[result], i];
        }
        map[nums[i]] = i;
    }
    return [];
};
// 题目变种输出多组符合条件的下标/值