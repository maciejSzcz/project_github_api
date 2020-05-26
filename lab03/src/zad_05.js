"use strict";

const arr = [
    { key: 0, x: [4, 5, 6], y: [1, 2, 3, 4] },
    { key: 0, x: [1], y: [] }
];

console.log(arr.reduce((acc, cur) => {
    return acc + Object.values(cur).map(x => x.length).reduce((acc2, cur2) => cur2 !== undefined ? acc2 + cur2 : acc2, 0)
}, 0))