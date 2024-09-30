/**
 * @param {number[]} prices
 * @param {number} day
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0], profit = 0;
    prices.forEach(price => {
        buy = Math.min(buy, price)
        profit = Math.max(profit, price - buy);
    })
    return profit
};