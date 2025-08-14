/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena(texto) {
    let nueva = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        nueva += texto[i];
    }

    return nueva;
}
console.log(invertirCadena("hola mundo"));
