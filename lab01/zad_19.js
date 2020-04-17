'use strict';

const result = (function(value) {
    return value.split(" ").sort((a,b) => b.length - a.length)[0];
})("ala ma kota");

console.log(result);