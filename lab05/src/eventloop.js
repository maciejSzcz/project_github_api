'use strict';
// Zadanie 2.1. Dopisz do pomiędzy deklaracją funkcji helloWorld, a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    console.log('Hello world!');
}


setTimeout(helloWorld, 500);

console.log('No, hello universe!');

// Zadanie 2.2. Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach wypisuje 'Koniec'.

const startStop = () => {
    console.log("Start!");
    setTimeout(() => console.log("Koniec"), 2000);
}

startStop()
// Zadanie 2.3. Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.
const welcome = () => {
    setInterval(() => console.log('Welcome'), 1000);
}

// welcome()
// Zadanie 2.4. Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. Podpowiedź: (użyj clearInterval)
const welcome5Times = () => {
    let counter = 5;
    const helloInterval = setInterval(() => {
        console.log('Welcome');
        counter--;
        if(counter === 0) {
            clearInterval(helloInterval)
        }
    }, 1000);
}

//welcome5Times()
// Zadanie 2.5. Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x milisekund i automatycznie zatrzyma się po upływie y milisekund. 

const callnTimesEveryMs = (fn, timeBetween, times) => {
    let counter = times;
    const interval = setInterval(() => {
        fn()
        counter--;
        if (counter === 0) {
            clearInterval(interval)
        }
    }, timeBetween);
}

// callnTimesEveryMs(() => console.log("funkcja"), 2000, 5)
  