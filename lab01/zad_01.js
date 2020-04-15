'use strict';

// Zadanie 1 
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij dlaczego w niektórych przypadkach wyniki różnią się.

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('a') : console.log('b');
    (val_1 === val_2) ? console.log('c') : console.log('d');
}

isEquals(2, '2'); // a d
isEquals(null, undefined); // a d
isEquals(undefined, NaN); // b d
isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); // b d
isEquals(0, ''); // a d
isEquals('0', ''); //b d
isEquals(+0, -0); // a c
isEquals(0, 'false'); //b d
isEquals([1, 2], '1,2'); //a d

!!false; //false
!!true; //true
!!undefined; // false
!!null; // false

// Zadanie 2
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

/* const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

console.log(person); */
/*
person = {};
console.log(person); */

// efekt to type error, const nie może zostać nadpisany

// Zadanie 3 
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

let number = 3;
console.log(number); {
    let number = 4;
    console.log(number);
}
console.log(number);

// wyswietli sie 3 4 3, number wewnątrz lokalnego zakresu {} równy jest 4, ale nie zmienia to wartości number poza nawiasami

// Zadanie 4
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

// 1
const arr = [1, 2];
const newArr = [arr, 3, 4];
console.log(newArr)

/* // 2
const arr = [1, 2];
const newArr = [...arr, 3, 4];
console.log(newArr) */

// ... spreaduje zawartość arr, czyli zawartość arr staje się wartościami newArr, więc newArr = [1, 2, 3, 4], bez ... jest to [[1, 2], 3, 4]

// Zadanie 4a
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'react';
const arrWord = [...word];
console.log(arrWord);
// ['r', 'e', 'a', 'c', 't'] to wynik, bo podzielił stringa

// Zadanie 5
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

var hello = 'Hello world!';
var result = hello / 2;

result; // NaN , hello to nie liczba wiec nie da sie dzielic

Number.isNaN(result); // true
Number.isNaN(hello); // false

// Zadanie 6
// Zapoznaj się z przykłądami poniżej. Jaka jest różnica między var a let/const?

var car = 'BMW';

function showCar() {
    car = 'Audi';
    /* model = 'A5'; */
    console.log('Great car!');
}

showCar();

car;
/* model;
 */


//-------

var person = 'Bryan';

(function differentName() {
    var person = 'Adam';
    console.log(person);
})();

console.log(person);

//-------

if (true) {
    var a = 2;
}
console.log(a);

if (true) {
    const a = 2;
}
/* console.log(b); */

//-------

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

//-------
 

var test = "var1";
var test = "var2";

let test2 = "let1";
/* let test2 = "let2"; */
 

// var nie ma zasięgu blokowego, ma zasięg globalny, może zostać nadpisany i ponownie zadeklarowany

// Zadanie 7
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// use strict powoduje że problemy w kodzie, które normalnie nie wyrzuciłyby błędu, pojawiają się w konsoli jako błąd