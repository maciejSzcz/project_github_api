'use strict';

const nthLargestFrom = (arr, n) => {
    arr = arr.sort((a,b) => a - b).reverse();
    return arr[n];
}

console.log(nthLargestFrom([1,5,8,3,1,245,3,1], 0));