/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(palabra1, palabra2) {
    if (palabra1 === palabra2) {
        return false
    }
    if (palabra1.length !== palabra2.length) {
        return false
    }
    const conteo1 = {}
    const conteo2 = {}

    for (let char of palabra1) {
        conteo1[char] = (conteo1[char] || 0) + 1
    }
    for (let char of palabra2) {
        conteo2[char] = (conteo2[char] || 0) + 1
    }
    for (let char in conteo1) {
        if (conteo1[char] !== conteo2[char]) {
            return false
        }
    }
    return true
}

console.log(anagrama("amor", "roma"));


