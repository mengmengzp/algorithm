/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    // 排序
    nums = nums.sort();
    let dfs = (path, arr) => {
        if (!arr.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            // 如果相同元素继续循环
            if (arr[i] === arr[i+1]) {
                continue;
            }
            path.push(arr[i]);
            dfs(path, [...arr.slice(0,i), ...arr.slice(i+1)]);
            path.pop();
        }
    }
    dfs([], nums);
    return res;
};
// @lc code=end

