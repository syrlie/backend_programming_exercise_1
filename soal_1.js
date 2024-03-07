function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function displayPrimes() {
    const max = 1000;
    console.log("Prime numbers between 1 and " + max + ":");
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

displayPrimes();
