/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let min = points[0][1], cnt = 0;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] > min) {
            cnt++;
            min = points[i][1];
            continue;
        }
        if (points[i][1] < min) {
            min = points[i][1];
        }
    }
    cnt++;
    return cnt;
};

findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]);