const numbers = [
2,4,5,1,0,9,14,30
];


const doubled = n => n ** 2;
console.log(numbers.map(doubled));

const smallerThan9 = n => n < 9;
console.log(numbers.filter(smallerThan9));

const smallerThan5 = n => n < 5;
console.log(numbers.filter(smallerThan5));

const even = n => n%2 === 0;
console.log(numbers.filter(even));

const odd = n => n%2 === 1;
console.log(numbers.filter(odd));

const multipliedBy4 = n => n*4;
console.log(numbers.map(multipliedBy4));

const multipliedBy2 = n => n*2;
console.log(numbers.map(multipliedBy2));