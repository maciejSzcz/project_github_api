// ZADANIE 3
// Napisz funkcję bez użycia iteracji (bez for, while itd.), która sprawdza co sekundę, czy podany w argumencie czas już minął.
// Jeśli minął, to drukujemy w konsoli 'Czas upłynął' i przypisujemy aktualny czas do zmiennej czasSukces i ją drukujemy w konsoli.
// Drugi argument w funkcji odpowiada maksymalnej liczbie prób sprawdzenia.
// Jeśli przekroczyliśmy liczbę prób, drukujemy w konsoli komunikat 'Limit prób przekroczony' i wywołujemy funkcję jeszcze raz tylko z mniejszym czasem.
// Wywołanie console.log(czasSukces); musi być zawarte POZA funkcją checkTime
// Przykładowy output w konsoli
// Sprawdzam ponownie
// Sprawdzam ponownie
// Sprawdzam ponownie
// Sprawdzam ponownie
// Sprawdzam ponownie
// Limit prób przekroczony
// Sprawdzam ponownie
// Sprawdzam ponownie
// Czas upłynął '22:21'! (lub jakikolwiek inny format czasu)
let czasSukces;

const checkTime = (arg, maxTries) => {
    let curdate = new Date;
    console.log(Date.parse(curdate))
    let curTime = 0;
    let tries = 0;
    return new Promise(() => {
        const interval = setInterval(function () {
        console.log("sprawdzam ponownie");
        tries += 1;
        if (curTime >= (arg * 1000)) {
            czasSukces = curTime;
            console.log(`czas upłynął ${arg}`);
            clearInterval(interval);
        } else if (tries >= maxTries) {
            console.log("Limit prób przekroczony");
            checkTime(arg - 1, maxTries);
            clearInterval(interval);
        }

        curTime += 1000;
        }, 1000);
    });
};

checkTime(21, 3).then(() => console.log(czasSukces));