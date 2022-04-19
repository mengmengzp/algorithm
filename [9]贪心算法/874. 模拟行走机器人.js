/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    // 当前坐标x轴可行走的方向，依次从上方顺时针
    let directionX = [0, 1, 0, -1];
    // 当前坐标y轴可行走的方向，依次从上方顺时针
    let directionY = [1, 0, -1, 0];
    // 方向长度
    let directionLength = directionX.length;
    // 当前方向
    let direction = 0;
    // 最大距离
    let maxDirection = 0;
    // 当前位置
    let x =0, y = 0;
    // 通过set存储障碍物坐标
    let set = new Set(obstacles.map(obstacle => obstacle.toString()));
    // 遍历指令
    for (let command of commands) {
        // 向左转90度，对应当前位置的左边移动，directionX的第三个索引
        if (command === -2) {
            // 防止越界取模
            direction = (direction + 3) % directionLength;
        } else if (command === -1) {
            // 向右旋转90度，对应当前位置的右边移动，directionY的第1个索引
            direction = (direction + 1) % directionLength;
        } else {
            // 行走逻辑
            for (let i = 0; i < command; i++) {
                let newX = x + directionX[direction];
                let newY = y + directionY[direction];
                let newPoint = `${newX},${newY}`;
                if (set.has(newPoint)) {
                    break;
                } else {
                    x = newX;
                    y = newY;
                    const direction = x*x + y*y;
                    maxDirection = Math.max(maxDirection, direction);
                }
            }
        }
    }
    return maxDirection;
};
// @lc code=end

