const isPrime = (num = undefined) => {
    if (isNaN(num) || num !== undefined) {
        console.log("Błędny argument")
    }

    for(let i=2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}

console.log(isPrime(1))