"use strict";

import listaZakupow from './listaZakupow.js';

const map = f => reducing => (result, input) =>
    reducing(result, f(input));

const filter = predicate => reducing => (result, input) =>
    predicate(input) ? reducing(result, input) : result;

const reducePrice = (akk, curr) => {
    curr.cena = curr.ilosc * curr.cena
    delete curr.ilosc
    return [...akk, curr]
}

const reduceDairy = (akk, curr) => {
    return curr.typ === 'nabiał'? akk + curr.cena : akk
}

const transducer1 = compose()

const reduceWeighed = (akk, curr) => {
    return curr.typ === ''
}

console.log(listaZakupow.reduce(reducePrice, []))
console.log(listaZakupow.reduce(reduceDairy, 0))