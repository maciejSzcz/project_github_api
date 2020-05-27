/*
1. Napisz funkcję, która za pomocą reduce obliczy średnią. Funkcja powinna przyjmować dwa parametry: tablicę obiektów i oznaczenie zmiennej, z której ma być wyliczana średnia.
// Przykład listy: const arr = [ { x: 4, y: 2}, { x:1, y:8 } .... ]; // 8 pkt
*/

console.log('----------------------- Zadanie 1 --------------------------')
const arr = [{ x: 4, y: 2 }, { x: 1, y: 8 }, { x: 4, y: 11 }];

const calcAvgOf = (array, name) => {
  const sum = array.reduce((acc, cur) => {
    return acc + cur[name]
  }, 0);

  return sum / array.length;
}

console.log(calcAvgOf(arr, "y"));


/*
2. Pobierz plik ships.js, a następnie wykorzystując zawarte w nim dane wykonaj poniższe polecenia: // 10 pkt
Zwróć obiekt spełniający poniższe wymagania:
 * Kluczem każdego z obiektów powinien być manufacturer. Obiekt ten powinien zawierać listę statków.
 * Każdy manufacturer powinien zawierać tablicę obiektów, gdzie kluczem będzie model zawierający wyokość statku i maksymalną prędkość.
 * W outpucie uwzględniamy tylko obiekty, które nie zostały zniszczone.

 Output:
 [
  'Sienar Fleet Systems': [
    [ 'Victory Star Destroyer': { height: 208, maximumSpeed: 700000 } ],
    [ 'Razor Crest': { height: 49, maximumSpeed: 6000 } ]
  ],
  'Incom Corporation': [
    [ 'BT-45D U-wing': { height: 3.35, maximumSpeed: 1400 } ],
    [ 'ARC 170-starfighter': { height: 3.98, maximumSpeed: 1050 } ]
  ],
  'Kuat Systems Engineering': [ 
    [ 'A-Wing': { height: 2.4, maximumSpeed: 1300 } ]
  ],
  ...
]
*/

console.log('----------------------- Zadanie 2 --------------------------')

import shipsArray from './ships.js';

const result = shipsArray
  .filter(object => object.destroyed === false)
  .reduce((acc, cur) => {
    if(!acc.hasOwnProperty(cur.manufacturer)) {
      acc[cur.manufacturer] = [];
    }

    const {model, height, maximumSpeed} = cur;
    const structuredShip = {
      [model]: {
        height, 
        maximumSpeed
      }
    }

    acc[cur.manufacturer] = [...acc[cur.manufacturer], structuredShip];
    return acc;
  }, []);

console.log(result);

/*
3. Napisz funkcję sum(), która będzie współdzielona przez wszystkie obiekty typu Array (typ wbudowany). Skorzystaj z reduce. Funkcja ma zwracać sumę wszystkich elementów tablicy. // 5 pkt
Np.: 
const arr = [3,4,5,6];
arr.sum(); // 18
*/

console.log('----------------------- Zadanie 3 --------------------------')

Array.prototype.sum = function () {
  return this.reduce((acc, cur) => {
    return acc + cur
  }, 0);
}

const arr2 = [3, 4, 5, 6];

console.log(arr2.sum());



/*
4. Zaimplementuj funkcję counter, która przyjmuje jako parametry dwie liczby i zwraca funkcję.  // 12 pkt
Kiedy zwracana funkcja jest wywołana, w konsoli powinny zostać wyświetlone wszystkie liczby pomiędzy 1 i pierwszym parametrem, w odstępie ilości milisekund podanych jako drugi parametr.
Rozwiązanie musi być zawarte w jednej funkcji (nie licząc zwracanej i wewnętrznych lambd). 
*/

console.log('----------------------- Zadanie 4 --------------------------');

const counter = (stop, timeBetween) => {
  return () => {
    let i = 1;
    const interval = setInterval(() => {
      console.log(i)
      if (i >= stop) {
        clearInterval(interval)
      }
      i++;
    }, timeBetween);
  }
}

console.log(counter(5, 2000));
// counter(5, 2000)();


/*
5. Zdefiniuj niżej opisany zestaw klas bez korzystania z słów kluczowych: class, extends, constructor // 15 pkt

Stwórz konstruktor klasy Vector2 z polami x i y.
Następnie zdefiniuj następujące funkcje dla klasy Vector2:
- diff(vector) - odejmuje aktualny wektor od wektora podanego w argumencie
- multiplyBy(number) - mnoży x i y wektora razy liczbę podaną w argumencie
- toString() - zwraca String w formacie 'x: <wartość> y: <wartość>'

Stwórz kolejny konstruktor klasy Ship o następujących polach:
- faction
- position - typu Vector2
- strength
- health

Zdefiniuj następujące funkcje dla klasy Ship:
- getDistance(enemyShip) - jeśli to możliwe, to oblicza dystans dzielący dwa statki (różnicę wektorów). W przeciwnym wypadku wypisuje komunikat błędu.
- checkHealth() - sprawdza czy zdrowie statku spadła poniżej 0. Jeśli tak wypisuje w konsoli komunikat.
- getDamage(amount) - obniża liczbę punktów zdrowia o podaną liczbę i sprawdza czy statek został zniszczony
- makeDamage(enemyShip) - zadaje obrażenia statkowi podanemu w argumencie (o wartość zmiennej strength)

Zdefiniuj klasę dziedziczącą po klasie Ship o nazwie CreateRebelShip
Niech konstruktor przyjmuje parametry: position, strength, health
Wartość faction powinna być na stałę ustawiona jako 'Rebel Alliance'.

Zdefiniuj funkcję dla klasy RebelShip:
- hyperspeed - ustawia wartość position na undefined

Zdefiniuj klasę dziedziczącą po Ship o nazwie DeathStar.
Niech konstruktor przyjmuje parametr: position
Niech faction będzie ustawiony na stałę na 'Empire'.
Niech klasa zawiera następujące pola:
- deathRayAvailable

Zdefiniuj następujące funkcje dla klasy DeathStar:
- makeDamage(enemyShip) - jeśli deathRayAvailable jest ustawione na true, to wywołuje funkcje odziedziczoną po Ship, a następnie ustawia deathRay na niedostępny na ustaloną liczbę sekund. Jeśli deathRayAvailable jest równe false, drukuje komunikat.

W razie potzeby można zadeklarować zmienne i funkcje pomocnicze w klasie DeathStar.

Przykładowy output:

utworzonyVector.toString(); // x: 3 y: 4
utworzonyVector.add(drugiVector);
utworzonyVector.toString(); // x: 5 y: 7

gwiazdaSmierci.makeDamage(statekRebeli);
Statek Rebelii otrzymał obrażenia równe: 10
Statek Rebelii został zniszczony

gwiazdaSmierci.makeDamage(statekRebeli).catch(error => console.log(error)); 
Promień gwiazdy śmierci jest niedostepny

// Powinna być również możliwość wywołania gwiazdaSmierci.makeDamage() dwa razy
*/

console.log('----------------------- Zadanie 5 --------------------------')


function Vector2(x, y) {
  //properties
  this.x = x
  this.y = y
  this.diff = function(vector2) {
    this.x -= vector2.x;
    this.y -= vector2.y
  }
  this.multiplyBy = function(number) {
    this.x = this.x * number;
    this.y = this.y * number;
  }
  this.toString = function() {
    console.log(`x: ${this.x} y: ${this.y}`)
  }

}

const vector3 = new Vector2(1, 2)
const vector4 = new Vector2(3, 5)

vector3.diff(vector4)
vector4.multiplyBy(4)
vector4.toString()

function Ship(faction, position, strength, health) {
  //properties
  this.faction = faction;
  this.position = position;
  this.strength = strength;
  this.health = health;
  this.getDistance = function(enemyShip) {
    return this.position.diff(enemyShip.position)
  }
  this.checkHealth = function() {
    if(this.health < 0) {
      console.log("Your ship is destroyed");
    }
  }
  this.getDamage = function(amount) {
    this.health -= amount;
    this.checkHealth()
  }
  this.makeDamage = function(enemyShip) {
    enemyShip.getDamage(this.strength);
  }
}

function CreateRebelShip( position, strength, health) {
  Ship.call(this, "Rebel Alliance", position, strength, health);
  this.hyperSpeed = undefined;
}

console.log(new CreateRebelShip(vector4, 16, 1));



/* Zdefiniuj następujące funkcje dla klasy Ship:
- getDistance(enemyShip) - jeśli to możliwe, to oblicza dystans dzielący dwa statki(różnicę wektorów).W przeciwnym wypadku wypisuje komunikat błędu.
- checkHealth() - sprawdza czy zdrowie statku spadła poniżej 0. Jeśli tak wypisuje w konsoli komunikat.
- getDamage(amount) - obniża liczbę punktów zdrowia o podaną liczbę i sprawdza czy statek został zniszczony
  - makeDamage(enemyShip) - zadaje obrażenia statkowi podanemu w argumencie(o wartość zmiennej strength)
 */