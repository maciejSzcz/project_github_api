"use strict"
// zadanie 1
const sum = (arr) => arr.reduce((a,b) => a + b)

console.log(sum([1,2,3,4,5,6]))

// zadanie 2
const squareNonNegatives = (arr) => {
    return arr.reduce((a,b) => {
        a+b
    })
}

console.log(squareNonNegatives([1,-2,-4, 5, 2, 5]))

// zadanie 3
const printIndexes = (arr) => {
    arr.reduce((a, b, index) => console.log(`${index-1}: ${b}`))
}

printIndexes([1, -2, -4, 5, 2, 5])