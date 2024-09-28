var RandomizedSet = function () {
    this.map = new Map();
    this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.has(val)) return false;
    let index = this.map.get(val), last = this.arr.at(-1);
    this.map.set(last, index);
    this.map.delete(val);
    this.arr[index] = last;
    this.arr.pop();
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.has = function (val) {
    return this.map.has(val);
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let r = new RandomizedSet();
r.insert(0);
r.insert(1);
r.remove(0);
r.insert(2);
r.remove(1);
r.getRandom();