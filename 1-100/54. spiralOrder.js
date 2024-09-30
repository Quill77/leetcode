/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let n = matrix.length, m = matrix[0].length
    let walls = [
        new Wall(0, m - 1, [0, 1], [1, -1], 1),
        new Wall(n - 1, m - 1, [1, 0], [-1, -1], 2),
        new Wall(n - 1, 0, [0, -1], [-1, 1], 3),
        new Wall(1, 0, [-1, 0], [1, 1], 0),
    ]
    let nextWall = walls[0]
    let ans = []
    let x = 0, y = 0
    while (ans.length < n * m) {
        ans.push(matrix[x][y])
        if (x === nextWall.x && y === nextWall.y) {
            nextWall.x += nextWall.moveDirection[0]
            nextWall.y += nextWall.moveDirection[1]
            nextWall = walls[nextWall.next]
        }
        x += nextWall.direction[0]
        y += nextWall.direction[1]
    }
    return ans
};

class Wall{
    constructor(x, y, direction, moveDirection, next) {
        this.x = x
        this.y = y
        this.direction = direction
        this.moveDirection = moveDirection
        this.next = next
    }
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))