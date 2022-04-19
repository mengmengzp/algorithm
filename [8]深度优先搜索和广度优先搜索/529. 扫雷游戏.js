/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    // 数组解构
    let [clickX, clickY] = click;
    // 如果当前值为M，直接改写x返回即可
    if (board[clickX][clickY] === 'M') {
        board[clickX][clickY] = 'X';
        return board;
    }
    // 矩阵行数
    let xLength = board.length;
    // 矩阵列数
    let yLength = board[0].length;
    // 当前元素x轴移动方向，依次上方顺时针
    let xDirection = [0, 1, 1, 1, 0, -1, -1, -1 ];
    // 当前元素y轴移动方向，依次上方顺时针
    let yDirection = [1, 1, 0, -1, -1, -1, 0, 1];
    // 是否越界
    let isOut =(x, y) => {
        return x < 0 || y < 0 || x >= xLength || y >= yLength;
    }
    let dfs = (x, y) => {
        // 如果当前坐标不是E，表示已经处理过，无需重复处理，退出递归
        if (isOut(x, y) || board[x][y] !== 'E') {
            return;
        }
          // 统计当前坐标周围的地 雷数量
        let count = 0;
        // 统计当前坐标周围8个方向的坐标点
        let aroundPoints = [];
    
        for (let i = 0; i < 8; i++) {
        // 生成当前坐标周围的8个点坐标
            let aroundX = x + xDirection[i];
            let aroundY = y + yDirection[i];
        
            // 只有在矩阵内部的坐标才需要判断
            if (!isOut(aroundX, aroundY)) {
                // 在矩阵内部的坐标，可能需要进一步递归统计周围地 雷数量，先将其缓存
                // 只有周围点的坐标为E，才需要入队，供下一次处理
                if (board[aroundX][aroundY] === 'E') {
                    aroundPoints.push([aroundX, aroundY]);
                }
        
                // 如果当前坐标周围有地雷，则统计数量
                if (board[aroundX][aroundY] === 'M') {
                    count++;
                }
            }
        }
    
        // 规则2
        // 如果当前坐标周围没有地 雷，则修改为B
        if (count === 0) {
            board[x][y] = 'B';
    
        // 继续查找周围的坐标是否需要标记地雷数量
            for (let i = 0; i < aroundPoints.length; i++) {
                dfs(...aroundPoints[i]);
            }
        } else {
        // 规则3
        // 如果当前坐标周围的地 雷数量大于0，则将其修改为地 雷数量
            board[x][y] = count.toString();
        }
    }
    
    dfs(clickX, clickY);
    return board
};
// @lc code=end

