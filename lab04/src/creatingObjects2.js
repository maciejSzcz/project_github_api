// Brawo, teraz wiesz jak działa słowo kluczowe new :) 
// 1. Uprość funkcję BookCreator tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 

function BookCreator(title, author, readers) {
    //properties
    this.title = title;
    this.author = author;
    this.readers = readers;
}

// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.

BookCreator.prototype.print = function () {
    console.log(this.title);
}

BookCreator.prototype.addReader = function () {
    this.readers = this.readers + 1;
}


// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class i constructor, aby osiągnąć powyższy efekt.

class BookCreator2 {
    constructor(title, author, readers) {
        this.title = title;
        this.author = author;
        this.readers = readers;
    }

    print() {
        console.log(this.title);
    }

    addReader() {
        this.readers = this.readers + 1;
    }
}

const book1 = new BookCreator2('Brave New World', 'Aldous Huxley', 7);

book1.print()
book1.addReader()

// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = name => ({
    name: name,
    age: undefined,
    addAge(a) {
        this.age = a
    }

})

const osoba = Person('fefe')
osoba.addAge(34)
console.log(osoba)

// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)

console.log(Person.prototype) // nie posiada własności prototype
//Person nie jest konstruktorem, więc nie można użyć new, osoba nie posiada własnośc