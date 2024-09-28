/**
 * @param {number[]} ratings
 * @return {number}
 */
//通过一个遍历结合递增和递减序列的处理，确保每个孩子按照其评分得到相应的糖果。
//特别是在处理递减序列时，通过增加递减序列的长度来满足更高评分的孩子比低评分的孩子得到更多糖果的要求，从而保证整个数组的糖果分配是最优的。
//time:O(n),space:O(1)
var candy = function(ratings) {
    const n = ratings.length; // 获取孩子数量
    let res = 1; // 初始化糖果数量，至少有一个孩子，因此至少需要1颗糖果
    let inc = 1, dec = 0, cur = 1; // 初始化变量
    // inc: 当前递增序列中的最后一个孩子的糖果数量
    // dec: 当前递减序列的长度
    // pre: 上一个孩子分配的糖果数量

    for (let i = 1; i < n; i++) {
        if (ratings[i] >= ratings[i - 1]) { // 当前评分 >= 前一个评分
            dec = 0; // 重置递减序列长度
            if (ratings[i] === ratings[i - 1]) cur = 1; // 相等的评分
            else cur++; // 评分递增，则当前孩子的糖果数量递增
            res += cur; // 增加当前孩子的糖果数量
            inc = cur; // 更新递增序列的糖果数量
        } else { // 当前评分 < 前一个评分
            dec++; // 递减序列长度加1
            if (dec === inc) dec++;  //当递减序列长度和递增序列长度相等时，把递增序列的最后一个同学分配到递减序列中
            res += dec; // 增加递减序列的糖果数量
            cur = 1; // 更新cur，表示当前孩子的糖果数量为1
        }
    }
    return res; // 返回最少的糖果总数量
};