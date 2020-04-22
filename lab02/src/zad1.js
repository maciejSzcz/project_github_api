"use strict"

const sum = (arr) => arr.reduce((a,b) => a + b);

const squareNonNegatives = (arr) => {
    return arr
        .filter(item => {
            return item >= 0;
        })
        .reduce((a, b) => {
            return a + b ** 2;
        }, 0);
};

const printIndexes = (arr) => {
    arr.reduce((a, b, index) => console.log(`${index-1}: ${b}`));
};

const countOccurences = (arr) => {
    return arr.reduce((acc, current) => {
        !acc[current] ? acc[current] = 1 : acc[current] += 1;

        return acc;
    }, []);
};

const convertObject = (arr) => {
    return arr.reduce((object, item) => {
        object[item.id] = item;
        return object;
    }, {});
};


console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(squareNonNegatives([1, -2, -4, 5, 2, 5]));
printIndexes([1, -2, -4, 5, 2, 5]);
console.log(countOccurences(['js', 'react', 'js', 'angular', 'angular', 'js']));
console.log(convertObject([
    { id: 'abc', name: 'Ala' },
    { id: 'def', name: 'Tomek' },
    { id: 'ghi', name: 'Jan' }
]));
