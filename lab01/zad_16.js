'use strict';

const printHello = (value = "World") => {
    return (typeof value) == "string" ? `Hello ${value}` : "Hello World";
}

console.log(printHello(2323));