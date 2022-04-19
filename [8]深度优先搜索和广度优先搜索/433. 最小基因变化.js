/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    let min = Infinity;
    let set = new Set();
    let dfs = (str, count) => {
        if (str === end) {
            min = Math.min(count, min);
            return;
        }
        for (let i = 0; i < bank.length; i++) {
            if (set.has(bank[i])) {
                continue;
            }
            let diff = 0;
            for (let j = 0; j < bank[i].length; j ++) {
                if (str[j] !== bank[i][j]) {
                    diff++;
                    if (diff > 1) {
                        break;
                    }
                }
            }
            if (diff === 1) {
                set.add(bank[i]);
                dfs(bank[i], count+1);
                set.delete(bank[i]);
            }
        }
    }
    dfs(start, 0);
    return min === Infinity ? -1 : min;
};
// @lc code=end

