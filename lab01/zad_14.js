'use strict';

const isEmpty = (value) => {
    return value == "" && (typeof value) == "string" ? true : false;
}

console.log(isEmpty(0));