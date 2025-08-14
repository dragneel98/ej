/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

// function contarPalabras(texto) {
//     const conteo = {};
//     let palabra = "";

//     // Recorremos cada carácter del texto
//     for (let i = 0; i < texto.length; i++) {
//         const char = texto[i].toLowerCase();
//         // Si es una letra o número, la añadimos a la palabra actual
//         if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9") || char === "á" || char === "é" || char === "í" || char === "ó" || char === "ú") {
//             palabra += char;
//         } else {
//             // Si encontramos un separador y tenemos algo en palabra, contamos
//             if (palabra) {
//                 conteo[palabra] = (conteo[palabra] || 0) + 1;
//                 palabra = "";
//             }
//         }
//     }
//     // Para la última palabra (si el texto no termina con un separador)
//     if (palabra) {
//         conteo[palabra] = (conteo[palabra] || 0) + 1;
//     }

//     return conteo;
// }
function contarPalabras(texto) {
    const conteo = {};
    let palabra = "";

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i].toLowerCase();

        if (/[a-z0-9]/.test(char)) {
            palabra += char;
        } else {
            if (palabra) {
                conteo[palabra] = (conteo[palabra] || 0) + 1;
                palabra = "";
            }
        }
    }

    if (palabra) {
        conteo[palabra] = (conteo[palabra] || 0) + 1;
    }

    return conteo;
}

const texto = "Hola, mundo! Hola hola... mundo";
console.log(contarPalabras(texto));
