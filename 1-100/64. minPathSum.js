/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    for (let i = 1; i < grid.length; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    for (let j = 1; j < grid[0].length; j++) {
        grid[0][j] += grid[0][j - 1]
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
        }
    }
    return grid.at(-1).at(-1);
};