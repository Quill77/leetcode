class Heap {
    constructor(isBigEndian = true) {
        this.heap = [0,];
        if (typeof isBigEndian === 'function') {
            this.comparator = (a, b) => isBigEndian(this.heap[a], this.heap[b]) >= 0;
        } else if (typeof isBigEndian === 'boolean') {
            this.comparator = isBigEndian ?
                (a, b) => this.heap[a] - this.heap[b] >= 0 :
                (a, b) => this.heap[a] - this.heap[b] <= 0;
        } else {
            throw Error('comparator must be function or bool!');
        }
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    push(num) {
        this.heap.push(num);
        let cur = this.heap.length - 1, next = cur >> 1;
        while (next !== 0 && this.comparator(cur, next)) {
            this.swap(cur, next);
            cur = next;
            next = cur >> 1;
        }
    }

    pop() {
        if (this.isEmpty()) return false;
        if (this.heap.length === 2) return this.heap.pop();
        let res = this.heap[1];
        this.heap[1] = this.heap.pop();
        let cur = 1;
        let l, r, max;
        while (true) {
            l = cur * 2;
            r = l + 1;
            if (l >= this.heap.length) break;
            else if (l === this.heap.length - 1) {
                max = l
            } else {
                max = this.comparator(l, r) ? l : r;
            }
            if (this.comparator(cur, max)) break;
            this.swap(cur, max);
            cur = max;
        }
        return res;
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    size() {
        return this.heap.length
    }

    top() {
        return this.heap[1];
    }
}

var MedianFinder = function () {
    this.smallHeap = new Heap();
    this.bigHeap = new Heap(false);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (num >= this.findMedian()) {
        this.bigHeap.push(num);
        if (this.bigHeap.size() > this.smallHeap.size() + 1) {
            this.smallHeap.push(this.bigHeap.pop());
        }
    } else {
        this.smallHeap.push(num);
        if (this.smallHeap.size() > this.bigHeap.size()) {
            this.bigHeap.push(this.smallHeap.pop());
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if ((this.smallHeap.size() + this.bigHeap.size()) % 2)
        return this.bigHeap.top();
    else
        return (this.bigHeap.top() + this.smallHeap.top()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */