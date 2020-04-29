"use strict";

import listaZakupow from './listaZakupow.js';

const reducePrice = (akk, curr) => {
    curr.cena = curr.ilosc * curr.cena
    delete curr.ilosc
    return [...akk, curr]
}

const reduceDairy = (akk, curr) => {
    return curr.typ === 'nabiał'? akk + curr.cena : akk
}



console.log(listaZakupow.reduce(reducePrice, []))
console.log(listaZakupow.reduce(reduceDairy, 0))