/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    let l = binSearch(intervals, newInterval[0], (i) => intervals[i][0]) + 1;
    let r = binSearch(intervals, newInterval[1], (i) => intervals[i][1]) + 1;
    if (intervals[l - 1] && intervals[l - 1][1] >= newInterval[0]) newInterval[0] = intervals[--l][0];
    if (intervals[r] && intervals[r][0] <= newInterval[1]) newInterval[1] = intervals[r++][1];
    intervals.splice(l, r - l, newInterval);
    return intervals;
};

const binSearch = (arr, target, handler = (i, arr) => arr[i]) =>
    handler(0) > target ? -1 :
        (function _binSearch(from = 0, to = arr.length) {
            if (from + 1 === to) return from;
            let middle = (from + to) >> 1;
            if (handler(middle) > target)
                to = middle;
            else
                from = middle;
            return _binSearch(from, to);
        })();
