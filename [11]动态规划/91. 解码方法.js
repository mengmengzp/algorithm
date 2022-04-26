/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s.length === 0 ) return 0;
    if (s[0] === '0') return 0;
    let dp = new Array(s.length + 1).fill(0);
    // 0-9
    dp[0] = 1;
    // 10-26
    dp[1] = 1;
    for (let i = 2; i <= s.length; i++) {
        let a = Number(s.slice(i-1, i));
        if (a >=1 && a<= 9) {
            dp[i] += dp[i-1];
        }
        let b = Number(s.slice(i-2, i));
        if (b >=10 && b <= 26) {
            dp[i] += dp[i-2];
        }
    }
    return dp[s.length];
};
// @lc code=end

