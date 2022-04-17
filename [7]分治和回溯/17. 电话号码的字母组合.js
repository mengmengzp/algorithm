/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    let obj = {};
    obj[2] = 'abc';
    obj[3] ='def';
    obj[4] = 'ghi';
    obj[5] = 'jkl';
    obj[6] = 'mno';
    obj[7] = 'pqrs';
    obj[8] = 'tuv';
    obj[9] = 'wxyz';
    let result = [];
    let dfs = (cur, depth) => {
        if (cur.length === digits.length) {
            result.push(cur);
            return;
        }
        let c = obj[digits[depth]];
        for (let i = 0; i < c.length; i++) {
            dfs(cur + c[i], depth + 1);
        }
    }
    dfs('', 0);
    return result;
};
// @lc code=end

