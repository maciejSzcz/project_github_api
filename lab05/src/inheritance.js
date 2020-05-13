'use strict';

// 1.1 
// Co wyświetlą na ekranie poniższe wywołania?

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}

// console.log(book.__proto__ === Object.prototype);    // true, book.__proto__ jest takie samo jak prototype Objectu bo go dziedziczy
// console.log(book.__proto__.__proto__ === null);      // true, book.__proto__.__proto__ nic nie zawiera, Object.prototype nie posiada wartosci __proto__

// 1.2. 
// Zastanów się, co należy wpisać w miejsce ..., tak aby każde wywołanie po odkomentowaniu zwróciło true.

const animals = ["dog", "cat", "rabbit", "hamster"];

// console.log(animals.__proto__ === Array.prototype);              // Array.prototype
// console.log(animals.__proto__.__proto__ === Object.prototype);   // Object.prototype
// console.log(animals.__proto__.__proto__.__proto__ === null);     // null

// 1.3. 
// Co zostanie wyświetlone na ekranie w poniższym przykładzie?

function Animal(animal) {
    this.animal = animal;
}

var dog = new Animal('dog');
var cat = new Animal('cat');
dog.whatIs = function () {
    console.log("It's a " + this.whatIs());
}

// console.log(dog.__proto__ === Animal.prototype);       //true
// console.log(dog.__proto__ === cat.__proto__);          //true

// 1.4.
// Stwórz obiekt za pomocą funkcji CreateMovie (zawierający klucze bez wartości: director, title, year) wykorzystując słówko `this`.
// Jeśli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmować wartość "unknown".

function CreateMovie(director, title, year = "unknown") {
    this.director = director;
    this.title = title;
    this.year = year
}

// Następnie nie zmieniając implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracającą true/false w zależności od tego, czy podany film jest młodszy/starszy nić rok 2000.
// * print - wyświetlającą: "director: title (year)"

CreateMovie.prototype.isOlder = function() {
    return this.year < 2000 ? true : false;
}

CreateMovie.prototype.print = function() {
    console.log(`${this.director}: ${this.title} (${this.year})`)
}

const tarantinoMovie1 = new CreateMovie("tarantino", "movie", 2011)
console.log(tarantinoMovie1.isOlder())
tarantinoMovie1.print()

// 1.5.
// Uzupełnij poniższy konstruktor o inicjalizację name, type i funkcję printInstrument. Funkcja printInstrument powinna być współdzielona między wszystkie utworzone obiekty.

function CreateInstrument(name, type) {

    const instrument = Object.create({name, type});

    instrument.printInstrument = function() {
        console.log(this.name, this.type)
    }

    return instrument;
}

const hehe = CreateInstrument("saxophone", "blown")

hehe.printInstrument()

// 1.6. 
// Uzupełnij poniższy konstruktor, który tworzy obiekt dziedziczący po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcję setStrings(number), która ustala liczbę strun w instrumencie (ta funkcja też powinna być współdzielona). NewStringInstrument powinien mieć też dostęp do funkcji, która znajduje się w Instrument.
// Podpowiedź: aby zmienić wartość zmiennej __proto__ należy użyć - Object.setPrototypeOf(object, prototype) - należy użyć tej funkcji dwa razy w tym rozwiązaniu. 

function CreateStringedInstrument(name, type, stringsCount) {
    const instrument = CreateInstrument(name, type);
    const newStringedInstrument = Object.create({stringsCount})

    Object.setPrototypeOf(newStringedInstrument, instrument)
    newStringedInstrument.setStrings = function(n) { this.stringsCount = n;}
    return newStringedInstrument;
}


const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
stringedInstrument.printInstrument();
stringedInstrument.setStrings(3);

// 1.7. 
// Przeanalizuj poniższy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: " + this.name + ", typ: " + this.type);
}
function StringedInstrument(stringsCount, name, type) {
    Instrument.call(this, name, type);
    //Instrument.apply(this, [name, type]); // wersja z apply
    this.stringsCount = stringsCount
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) Stwórz instancję StringedInstrument.

const newStringed = new StringedInstrument("6", "gitarra", "strunowe");

// b) W jaki sposób odwołać się do metod printInstrument i printStringedInstrument?

newStringed.printInstrument()
//można odwołać się w dowolny sposób jeśli zmienimy w printinstrument name na this.name i type na this.type, w przeciwnym wypadku obie te wartości odnoszą się do globalnych wartości a nie pól Instrument

// c) Zastąp wywołanie call() funkcją apply() 


// 1.8.
// Utwórz obiekt Animal z polem 'name' i funkcją printName, po którym będą dziedziczyły Mammal (z polem age i funkcją getAge) i Fish (z polem weight i funkcją increaseWeight()) . 
// Następnie stwórz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(), która tutaj będzie najpierw wywoływała funkcję getAge() z klasy dziedziczonej, a następnie mnożyła wynik razy 4 i wyświetlała go) i Salmon (z funkcją catch()), które będą dziedziczyły odpowiednio po Mammal i Fish.
// W razie problemów wzoruj się na rozwiązaniu z poprzedniego zadania.

function Animal2(name) {
    this.name = name;
}

Animal2.prototype.printName = function(){
    console.log(this.name);
}

function Mammal(name, age) {
    Animal2.call(this, name);
    this.age = age;
}
Mammal.prototype = Object.create(Animal2.prototype);

Mammal.prototype.getAge = function(){
    return this.age;
}

function Fish(name, weight) {
    Animal2.call(this, name);
    this.weight = weight;
}
Fish.prototype = Object.create(Animal2.prototype);

Fish.prototype.increaseWeight = function () {
    this.weight = this.weight + 1;
}

function Dog(name, age, breed) {
    Mammal.call(this, name, age);
    this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);

Dog.prototype.getAge = function () {
    console.log(this.age * 4);
}

function Salmon(name, weight) {
    Fish.call(this, name, weight);
}

Salmon.prototype = Object.create(Fish.prototype);

Salmon.prototype.catch = function () {
    return "rybka złapana";
}

const dog2 = new Animal2("burek")
dog2.printName()

const dog3 = new Dog("burek3", 6, "Golden")
dog3.printName()
dog3.getAge()

const nowySsak = new Mammal("piesek", 15)
nowySsak.getAge()
nowySsak.printName()

const nowaRybka = new Fish("rybka", 120)
nowaRybka.printName()
nowaRybka.increaseWeight()
console.log(nowaRybka.weight)