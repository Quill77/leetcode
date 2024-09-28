/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let ans = 0;
    let sink = function (grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== '1') return
        grid[i][j] = '0'
        sink(grid, i + 1, j)
        sink(grid, i - 1, j)
        sink(grid, i, j + 1)
        sink(grid, i, j - 1)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                ans++
                sink(grid, i, j)
            }
        }
    }
    return ans;
};