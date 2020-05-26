"use strict";

function getValue(object, path) {
    const pathArray = path.split(".");

    const value = pathArray.reduce((acc, cur) => { 
        return acc[cur];
    }, object);

    return value === undefined ? null : value;
}

const obj = {
    person: {
        address: {
            street: 'Wiejska'
        },
        name: 'Tomasz'
    }
}

console.log(getValue(obj, 'person.address.street')); // => Wiejska 
console.log(getValue(obj, 'person.name')); // => Tomasz
console.log(getValue(obj, 'person.lastName')); // => null