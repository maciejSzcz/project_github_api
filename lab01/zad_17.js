'use strict';

const rangeTo = (max) => {
    return Array(max).fill(1).map((x, y) => x + y).join("");
}

console.log(rangeTo(9));