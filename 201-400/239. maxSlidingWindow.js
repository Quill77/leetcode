/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const queue = [], res = []
    for (let i = 0; i < nums.length; i++) {
        if (queue[0] === nums[i - k]) queue.shift()
        while (queue.length > 0 && queue[queue.length - 1] <= nums[i]) queue.pop()
        queue.push(nums[i])
        if (i >= k - 1) res.push(queue[0])
    }
    return res
};

class MonoQueue {
    constructor() {
        this.queue = []
    }

    isEmpty() {
        return this.queue.length === 0
    }

    top() {
        return this.queue[0]
    }

    bottom() {
        return this.queue[this.queue.length - 1]
    }

    #pop() {
        this.queue.pop()
    }

    push(i) {
        while (!this.isEmpty() && i > this.bottom()) {
            this.#pop()
        }
        this.queue.push(i)
    }

    shift() {
        return this.queue.shift()
    }
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))