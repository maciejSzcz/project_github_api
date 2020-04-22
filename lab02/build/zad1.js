"use strict";

var sum = function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
};

var squareNonNegatives = function squareNonNegatives(arr) {
  return arr.filter(function (item) {
    return item >= 0;
  }).reduce(function (a, b) {
    return a + Math.pow(b, 2);
  }, 0);
};

var printIndexes = function printIndexes(arr) {
  arr.reduce(function (a, b, index) {
    return console.log("".concat(index - 1, ": ").concat(b));
  });
};

var countOccurences = function countOccurences(arr) {
  return arr.reduce(function (acc, current) {
    !acc[current] ? acc[current] = 1 : acc[current] += 1;
    return acc;
  }, []);
};

var convertObject = function convertObject(arr) {
  return arr.reduce(function (object, item) {
    object[item.id] = item;
    return object;
  }, {});
};

console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(squareNonNegatives([1, -2, -4, 5, 2, 5]));
printIndexes([1, -2, -4, 5, 2, 5]);
console.log(countOccurences(['js', 'react', 'js', 'angular', 'angular', 'js']));
console.log(convertObject([{
  id: 'abc',
  name: 'Ala'
}, {
  id: 'def',
  name: 'Tomek'
}, {
  id: 'ghi',
  name: 'Jan'
}]));