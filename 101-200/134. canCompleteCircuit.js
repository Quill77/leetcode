/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let n = gas.length, distance;
    for (let start = 0; start < n; start += distance) {
        let rest = 0;
        for (distance = 0; distance < n && rest >= 0; distance++) {
            let next = (start + distance) % n;
            rest += gas[next] - cost[next];
        }
        if (rest >= 0 && distance === n) {
            return start;
        }
    }
    return -1;
};


console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

