// ========================================
// ZADANIE 1
// ========================================

//  Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisze: author - title

const book0 = {
    //properties
    title: 'Brave New World',
    author: 'Aldous Huxley',
    print: function() {
        console.log(this.title);
    }
};

book0.print();

const book = {};
//properties
book.title = 'Brave New World';
book.author = 'Aldous Huxley';
book.print = function () {
    console.log(this.title);
}

book.print();

const book2 = Object.create({});
//properties
book2.title = 'Brave New World';
book2.author = 'Aldous Huxley';
book2.print = function () {
    console.log(this.title);
}

book2.print();

function BookCreator(title, author) {
    const b = {};
    //properties
    b.title = title;
    b.author = author;
    b.print = function () {
        console.log(this.title);
    }

    return b
}

const book3 = BookCreator('Cień wiatru', 'Carlos Ruiz Zafon');
const book4 = BookCreator('Ojciech Chrzestny', 'Mario Puzo');

book3.print();
book4.print();

// ========================================
// ZADANIE 2
// ========================================

// Przetestuj poniższy kod i odpowiedz na pytania

function testThis() {
    console.log(this === undefined); //tu jest undefined
}

testThis();

function testThis2() {
    "use strict"
    console.log(this === undefined); //tu też jest undefined
}

testThis2();

// 2.1. Czym jest this?
// 2.2. Do czego odwołuje się this w obu przypadkach

const person = {
    name: 'Oscar Wilde',
    print() {
        console.log(this.name); //w metodach this odnosi się do objektu w którym się znajduje, tutaj konkretnie do wartości name
        
        function a() {
            console.log(this);  //tu funkcja a stworzyła sobie kontekst this, więc this odnosi sie do a
        }
        const aFixed = a.bind(this);

        aFixed()
    }
}
person.print();

// 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego?
// 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function() {
    console.log(this.name);
}

const person1 = {
    name: 'Aaron Towels',
}

const print1 = printName.bind(person1)
print1()

const person2 = {
    name: 'Tom Clancy'
}

const print2 = printName.bind(person2)
print2()

// 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!

const person3 = {
    name: 'Arthur Conan Doyle',
    print() {
        const a = () => {
            console.log(this);
        };
        a();
    }
}
person3.print();
// wydrukuje { name: 'Arthur Conan Doyle', print: [Function: print] }, arrow function nie tworzy własnego kontekstu this

// 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function? 

// ========================================
// ZADANIE 3
// ========================================

// Powróćmy do zadania 1. 
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?

// Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title. 
// Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
// Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
// Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.

function Book(title, author, readers) {
    //properties
    this.title = title;
    this.author = author;
    this.readers = readers;
}

Book.prototype.print = function () {
    console.log(this.title);
}

Book.prototype.addReader = function () {
    this.readers = this.readers + 1;
}

const book5 = new Book('Cień wiatru', 'Carlos Ruiz Zafon', 4);
const book6 = new Book('Brave New World', 'Aldous Huxley', 7);
book5.print()
book6.addReader()
book6.print()


// ========================================
// ZADANIE 4
// ========================================

// Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller'). 
// ========================================
// Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania lub spytaj prowadzącego)
console.log(Book.hasOwnProperty('isBestseller')) //ze względu na dziedziczenie


// ========================================
// ZADANIE 5
// ========================================

// Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy?

console.log(book5.__proto__)
console.log(book5.__proto__ === Book.prototype)
// __proto__ to skopiowane Book.prototype, czyli prototyp funkcji, zawierający własności które są dziedziczone (przekazywane przez prototype chain)