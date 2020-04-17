'use strict';

const calculateTotalTax = (arr) => {
    return arr.reduce((a, b) => a + b) * 1.23;
}

calculateTotalTax([1,23,4,6,87,8]);