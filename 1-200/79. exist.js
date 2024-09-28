/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let search = function (i, j, target) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word.charAt(target)) return false
        if (target === word.length - 1) return true
        board[i][j] = '*'
        if (search(i - 1, j, target + 1)
            || search(i + 1, j, target + 1)
            || search(i, j - 1, target + 1)
            || search(i, j + 1, target + 1)) return true;
        board[i][j] = word.charAt(target)
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (search(i, j, 0)) return true;
        }
    }
    return false
};
exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')