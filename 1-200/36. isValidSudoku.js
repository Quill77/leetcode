/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rowGenerator = function* (j) {
        for (let i = 0; i < 9; i++) {
            yield board[i][j];
        }
    }

    const colGenerator = function* (j) {
        for (let i = 0; i < 9; i++) {
            yield board[j][i];
        }
    }

    const positions = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
    const blockGenerator = function* (i) {
        let [x, y] = positions[i];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                yield board[x + i][y + j];
            }
        }
    }

    let generators = [];
    for (let i = 0; i < 9; i++) {
        generators.push(rowGenerator(i));
    }
    for (let i = 0; i < 9; i++) {
        generators.push(colGenerator(i));
    }
    for (let i = 0; i < 9; i++) {
        generators.push(blockGenerator(i));
    }

    const check = (g) => {
        let state = 0b000_000_000;
        for (let i of g) {
            if (i === '.') continue;
            let bool = 1 << +i;
            if (state & bool) return false;
            state |= bool;
        }
        return true;
    }
    for (g of generators) {
        if (!check(g)) return false;
    }
    return true;
};
const board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board));