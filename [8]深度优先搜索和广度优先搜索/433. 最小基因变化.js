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
        // 结束条件：与最终字符相等时
        if (str === end) {
            min = Math.min(count, min);
            return;
        }
        // 遍历基因库
        for (let i = 0; i < bank.length; i++) {
            // 如果set已经存在该字符串，则退出本次迭代，继续i++
            if (set.has(bank[i])) {
                continue;
            }
            let diff = 0;
            // 字符挨着比较
            for (let j = 0; j < bank[i].length; j ++) {
                // 如果不相等，则diff++
                if (str[j] !== bank[i][j]) {
                    diff++;
                    // 如果超过1，则退出比较
                    if (diff > 1) {
                        break;
                    }
                }
            }
            // 如果只有1个不一样，将该基因存储到set中，继续递归
            if (diff === 1) {
                set.add(bank[i]);
                dfs(bank[i], count+1);
                // 清空set，防止影响上次递归
                set.delete(bank[i]);
            }
        }
    }
    dfs(start, 0);
    return min === Infinity ? -1 : min;
};
// @lc code=end

