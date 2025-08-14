/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
    let a = 0, b = 1;

    for (let i = 0; i < 50; i++) {
        console.log(a); // Imprimir el número actual
        let temp = a + b; // Calcular el siguiente
        a = b;            // Mover b a a
        b = temp;         // Mover siguiente a b
    }
}
fibonacci();


