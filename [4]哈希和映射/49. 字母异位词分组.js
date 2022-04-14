/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 定义对象
    let map = {};
    for (let str of strs) {
        // 将字符变成数组排序再变成字符串
        let letters = str.split('').sort().join('');
        // 相同key进行添加，不同key新增对象属性
        map[letters] ? map[letters].push(str) : map[letters] = [str];
    }
    return Object.values(map);
};
// @lc code=end

