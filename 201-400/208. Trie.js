var Trie = function () {
    this.children = new Map();
    this.isLeaf = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (word.length === 0) {
        this.isLeaf = true;
        return;
    }
    if (!this.children.has(word[0])) {
        this.children.set(word[0], new Trie())
    }
    this.children.get(word[0]).insert(word.slice(1))
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    if (word.length === 0 && this.isLeaf) return true;
    else if (!this.children.has(word[0])) return false;
    else return this.children.get(word[0]).search(word.slice(1));
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    if (prefix.length === 0) return true;
    else if (!this.children.has(prefix[0])) return false;
    else return this.children.get(prefix[0]).startsWith(prefix.slice(1));
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
