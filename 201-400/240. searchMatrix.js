/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let i = 0, j = matrix[0].length - 1
    while (true) {
        if (i >= matrix.length || j < 0) return false
        if (matrix[i][j] === target) return true
        else if (matrix[i][j] > target) j--
        else if (matrix[i][j] < target) i++
    }
};
// var searchMatrix = function (matrix, target) {
//     return _searchMatrix(matrix, target, 0, matrix.length - 1, 0, matrix[0].length - 1)
// };
//
// var _searchMatrix = function (matrix, target, ifrom, ito, jfrom, jto) {
//     if (matrix[ifrom][jfrom] > target || matrix[ito][jto] < target) return false
//     let ihalf = Math.floor((ifrom + ito) / 2), jhalf = Math.floor((jfrom + jto) / 2)
//     if (ito - ifrom === 0 && jto - jfrom === 0)
//         return matrix[ifrom][jfrom] === target
//     if (ito - ifrom === 0)
//         return _searchMatrix(matrix, target, ifrom, ito, jfrom, jhalf)
//             || _searchMatrix(matrix, target, ifrom, ito, jhalf + 1, jto)
//
//     if (jto - jfrom === 0)
//         return _searchMatrix(matrix, target, ifrom, ihalf, jfrom, jto)
//             || _searchMatrix(matrix, target, ihalf + 1, ito, jfrom, jto)
//
//
//     return _searchMatrix(matrix, target, ifrom, ihalf, jfrom, jhalf)
//         || _searchMatrix(matrix, target, ihalf + 1, ito, jfrom, jhalf)
//         || _searchMatrix(matrix, target, ifrom, ihalf, jhalf + 1, jto)
//         || _searchMatrix(matrix, target, ihalf + 1, ito, jhalf + 1, jto)
// }


console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20))