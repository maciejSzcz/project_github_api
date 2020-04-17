'use strict';

const filterGT = (arr, num) => {
    return arr.filter((item) => item > num);
}

console.log(filterGT([1,2,3,4,5,6,7], 4));