/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let square = [];

    let check4 = (n) => {
        while (n % 4 === 0) n /= 4;
        return n % 8 === 7;
    }

    let check1 = (n) => {
        return Number.isInteger(n ** 0.5);
    }

    let check2 = (n) => {
        for (let i = 0; i < n ** 0.5; i++) {
            if (check1(n - i ** 2)) return true;
        }
        return false;
    }


    if (check1(n)) return 1;
    if (check4(n)) return 4;
    if (check2(n)) return 2;
    return 3;

};


