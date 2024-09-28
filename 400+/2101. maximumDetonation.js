/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
    for (let i = 0; i < bombs.length; i++) {
        bombs[i].range = []
        bombs[i].r2 = bombs[i][2] ** 2
        for (let j = 0; j < i; j++) {
            setRange(bombs[i], bombs[j])
        }
    }
    let ans = 0
    for (let bomb of bombs) {
        ans = Math.max(ans, boom(bomb))
        bombs.forEach(bomb => bomb.isBoomed = false)
    }
    return ans
};

function setRange(bomb1, bomb2, index1, index2) {
    let distance2 = (bomb1[0] - bomb2[0]) ** 2 + (bomb1[1] - bomb2[1]) ** 2
    if (bomb1.r2 >= distance2) {
        bomb1.range.push(bomb2)
    }
    if (bomb2.r2 >= distance2) {
        bomb2.range.push(bomb1)
    }
}

function boom(bomb) {
    if (bomb.isBoomed) return 0
    bomb.isBoomed = true
    let boomSize = 1
    for (let childBomb of bomb.range) {
        boomSize += boom(childBomb)
    }
    return boomSize
}

