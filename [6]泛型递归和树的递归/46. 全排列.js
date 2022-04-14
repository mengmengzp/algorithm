/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let dfs = (path, arr) => {
        if (!arr.length) {
            res.push([...path]);
            return
        }
        for (let i = 0; i < arr.length; i++) {
            path.push(arr[i]);
            dfs(path, [...arr.slice(0, i), ...arr.slice(i+1)]);
            path.pop();
        }
    }
    dfs([], nums);
    return res;
};
// @lc code=end

