/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));
    let colSet = new Set(), diaSet = new Set(), antiDiaSet = new Set();
    let ans = []
    let notValid = function (row, col) {
        return colSet.has(col) || diaSet.has(row + col) || antiDiaSet.has(row + n - col);
    }
    let setQueen = function (row, col) {
        board[row][col] = 'Q';
        colSet.add(col)
        diaSet.add(row + col);
        antiDiaSet.add(row + n - col);
    }

    let removeQueen = function (row, col) {
        board[row][col] = '.';
        colSet.delete(col)
        diaSet.delete(row + col);
        antiDiaSet.delete(row + n - col);
    }

    let tryQueen = function (row) {
        if (row === n) {
            ans.push(board.map(l => l.join('')))
            return
        }
        for (let col = 0; col < n; col++) {
            if (!notValid(row, col)) {
                setQueen(row, col);
                tryQueen(row + 1);
                removeQueen(row, col);
            }
        }
    }

    tryQueen(0);
    return ans;
};


console.log(solveNQueens(4))