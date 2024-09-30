/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    return intervals
        .sort((a, b) => a[0] - b[0])
        .reduce((arr, next) => {
            let last = arr[arr.length - 1]
            if (arr.length === 0 || next[0] > last[1])
                arr.push(next)
            else if (next[1] > last[1])
                last[1] = next[1]
            return arr
        }, [])
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))