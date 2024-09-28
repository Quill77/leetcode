/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let m = board.length, n = board[0].length;
    const positions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let num = 0;
            for (let [x, y] of positions) {
                num += (board[i + x]?.[j + y] ?? 0) & 1;
            }
            if (board[i][j] === 0 && num === 3) {
                board[i][j] = 2;
            } else if (board[i][j] === 1 && (num === 2 || num === 3)) {
                board[i][j] = 3;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] >>= 1;
        }
    }
};

