const numbers = [
2,4,5,1,0,9,14,30
];


const doubled = n => n ** 2;
console.log(numbers.map(doubled));

const smallerThan = x => y => y < x;

const smallerThan9 = smallerThan(9);
const smallerThan5 = smallerThan(5);

console.log(numbers.filter(smallerThan9));
console.log(numbers.filter(smallerThan5));

const remainder = x => y => y%2 === x

const even = remainder(0);
console.log(numbers.filter(even));

const odd = remainder(1);
console.log(numbers.filter(odd));

const multiply = x => y => x*y 

const multipliedBy4 = multiply(4);
const multipliedBy2 = multiply(2);
console.log(numbers.map(multipliedBy4));
console.log(numbers.map(multipliedBy2));