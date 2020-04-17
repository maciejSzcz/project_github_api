'use strict';

const isPalindrome = (arr) => {
    return arr == arr.reverse() ? true : false;
}

console.log(isPalindrome([1,2,3,4,3,2,1]));