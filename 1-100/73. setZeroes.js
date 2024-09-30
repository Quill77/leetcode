/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let setx = false, sety = false
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] !== 0) continue
            matrix[i][0] = 0
            matrix[0][j] = 0
            if (i === 0) setx = true
            if (j === 0) sety = true
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] !== 0) continue
        for (let j = 1; j < matrix[0].length; j++) {
            matrix[i][j] = 0
        }
    }
    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] !== 0) continue
        for (let i = 1; i < matrix.length; i++) {
            matrix[i][j] = 0
        }
    }
    if (setx) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }
    if (sety) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
};
let matrix = [[1, 0, 3]]
setZeroes(matrix)
console.log(matrix)