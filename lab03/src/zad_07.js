"use strict";

const getMatrixDiagonal = (matrix) => {
    const pierwszaDiagonalna = matrix
        .map((row, index) => row[index])
        .reduce((acc, cur) => {
            return acc + cur
        }, 0);

    const drugaDiagonalna = matrix
        .map((row, index) => row[matrix.length - index - 1])
        .reduce((acc, cur) => {
            return acc + cur
        }, 0);

    console.log(pierwszaDiagonalna, drugaDiagonalna)
}

const matrix = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];

console.log(getMatrixDiagonal(matrix));