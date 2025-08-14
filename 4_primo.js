/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(num) {
    if (num <= 1) return false; // 0 y 1 no son primos

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si es divisible por otro número, no es primo
    }

    return true;
}

for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}


