'use strict';
import axios from 'axios';

// 3.1 Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
// Jako callback niech wypisze zwrócony string w konsoli.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Udało się");
    }, 5000)
}).then((result) => {
    console.log(result)
})

// 3.2 Zmodyfikuj powyższy kod tak, aby zamiast z sukcesem - promise zakończył się porażką i zwracał string 'Porażka'.
// Skorzystaj z then() aby obsłużyć błąd.

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Porażka");
    }, 5000)
}).then(result => {
    console.log(result)
}, reason => {
    console.log(reason)
})

// 3.3 Zamiast then(), zmodyfikuj powyższy kod używając catch()

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Porażka");
    }, 5000)
}).catch((result) => {
    console.log(result)
})

// 3.4 Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą).
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback, który wypisuje wynik w konsoli.

const multiplyAsync = (x, y) => {
    new Promise((resolve, reject) => {
        if(typeof x !== "number" || typeof y !== "number") {
            reject("nie są liczbą")
        } else {
            resolve(x*y)
        }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

multiplyAsync(2,4)
// 3.5 Dołącz axios do projektu. Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts.
// Jako pierwszy callback - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.


axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.status === 200 ? res : console.error("error"))
    .then((res) => {
        const {data, headers} = res;
        console.log(data, headers)
    })

/* 3.6 Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos.
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/

const postTodos = (object) => {
    new Promise((resolve, reject) => {
        const {idUser, title, completed} = object;

        if (typeof idUser !== "number" || typeof title !== "string" || typeof completed !== "boolean") {
            reject("Dane nie poprawne")
        } else {
            resolve(object)
        }
    })
    .then((data) => {
        axios.post("https://jsonplaceholder.typicode.com/todos", data)
            .then((res) => console.log("Dodano, id objektu:", res.data.idUser))
            .catch((err) => console.log(err))
    })
    .catch((err) => console.error(err))

    
}

const testData = {
    idUser: 201,
    title: "tetetetet",
    completed: false
}

postTodos(testData)