'use strict';

const rmNums = (arr, arg1, ...args) => {
    arr = arr.filter((item) => {
        return item !== arg1;
    });

    args.forEach((arg) => {
        arr = arr.filter((item) => {
            return item !== arg;
        })
    });

    return arr;
}

console.log(rmNums([1,2,3,4,5,6], 1, 3, 4));