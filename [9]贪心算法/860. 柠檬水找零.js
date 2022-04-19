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
    let five = 0, ten = 0;
    for (let bill of bills) {
        if (bill === 5) five++;
        else if (bill === 10) {
            ten++;
            if (five === 0) return false;
            else five--;
        } else {
            let change = 15;
            if (ten > 0) {
                ten--;
                change -= 10;
            }
            while(change > 0) {
                five--;
                if (five < 0) return false;
                change -= 5;
            }
        }
    }
    return true;
};
// @lc code=end

