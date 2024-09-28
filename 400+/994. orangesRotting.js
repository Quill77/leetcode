/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let rottingOranges = [], n = grid.length, m = grid[0].length;
    let rot = function (x, y) {
        rottingOranges.push([x, y])
        grid[x][y] = 2;
    };
    let spread = function (x, y) {
        if (x < n - 1 && grid[x + 1][y] === 1) rot(x + 1, y);
        if (x > 0 && grid[x - 1][y] === 1) rot(x - 1, y);
        if (y < m - 1 && grid[x][y + 1] === 1) rot(x, y + 1);
        if (y > 0 && grid[x][y - 1] === 1) rot(x, y - 1);
    }
    let allRotted = function () {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) return false;
            }
        }
        return true;
    }

    let init = function () {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 2) rottingOranges.push([i, j])
            }
        }
    }

    let time = 0;
    let startRotting = function () {
        while (rottingOranges.length !== 0) {
            let k = rottingOranges.length;
            for (let i = 0; i < k; i++) {
                spread(...rottingOranges.shift())
            }
            time++;
        }
    }

    init();
    startRotting();
    return allRotted() ? Math.max(0, time - 1) : -1;
};


console.log(orangesRotting([[0]]))