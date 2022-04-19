/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 定义5、10的个数
    let five = 0, ten = 0;
    for (let bill of bills) {
        // 如果是5，不需要找零，直接five++
        if (bill === 5) five++;
        else if (bill === 10) {
            // 如果是10，ten++需要找5
            ten++;
            // 如果没有5，不能找零
            if (five === 0) return false;
            // 如果有5，five--
            else five--;
        } else {
            // 如果是20，需要找零15
            let change = 15;
            // 如果有10，ten--并且需要找零 -10
            if (ten > 0) {
                ten--;
                change -= 10;
            }
            // 当还需要找零时
            while(change > 0) {
                // 如果没有5,不能找零
                if (five === 0) return false;
                // 如果有5，five--并且需要找零 -5
                five--;
                change -= 5;
            }
        }
    }
    return true;
};
// @lc code=end

