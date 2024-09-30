/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
        // 如果这里没有节点构造二叉树了，就结束
        if (in_left > in_right) {
            return null;
        }

        // 选择 post_idx 位置的元素作为当前子树根节点
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);

        // 根据 root 所在位置分成左右两棵子树
        const index = idx_map.get(root_val);

        // 下标减一
        post_idx--;
        // 构造右子树
        root.right = helper(index + 1, in_right);
        // 构造左子树
        root.left = helper(in_left, index - 1);
        return root;
    }

    // 从后序遍历的最后一个元素开始
    post_idx = postorder.length - 1;

    // 建立（元素，下标）键值对的哈希表
    let idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    return helper(0, inorder.length - 1);

};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree2 = function(inorder, postorder) {
    const inLen = inorder.length;
    const postLen = postorder.length;
    const map = new Map();
    for (let i = 0; i < inLen; i++) {
        map.set(inorder[i], i);
    }

    const buildTreeHandler = (inLeft, inRight, postLeft, postRight) => {
        if (inLeft > inRight || postLeft > postRight) {
            return null;
        }

        const pivot = postorder[postRight];
        const root = new TreeNode(pivot);
        const pIdx = map.get(pivot);

        root.left = buildTreeHandler(
            inLeft,
            pIdx - 1,
            postLeft,
            postLeft + pIdx - inLeft - 1
        );
        root.right = buildTreeHandler(
            pIdx + 1,
            inRight,
            postLeft + pIdx - inLeft,
            postRight - 1
        );

        return root;
    };

    return buildTreeHandler(0, inLen - 1, 0, postLen - 1);
};