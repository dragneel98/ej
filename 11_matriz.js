// Dada una matriz de m x n, devolver la suma de todos sus elementos.

function sumaMatriz(matriz) {
    let suma = 0;

    for (let fila of matriz) {
        console.log(fila);
        for (let num of fila) {
            suma += num;
        }
    }

    return suma;
}

console.log(sumaMatriz([[1, 2], [3, 4]])); // 10
