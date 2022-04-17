/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) return [];
    let result = [];
    let dfs = (path, index) => {
        result.push(path);
        for(let i = index; i < nums.length; i++) {
            dfs([...path, nums[i]], i+1);
        }
    }
    dfs([], 0);
    return result;
};
// @lc code=end

