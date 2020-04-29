"use strict";

const toMatrix = (arr, width) => {
    return arr.reduce((acc, cur, i) => {
        const slice = arr.slice(width * i, width * (i + 1))
        return slice.length > 0 ? [...acc, slice] : acc
    }, []);

}

console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8], 3))