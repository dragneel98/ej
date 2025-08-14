// Dado un array de enteros y un número target, devolver los índices de los dos números que suman target.

function dosSuman(nums, target) {
    const resultado = []
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        const siguiente = nums[i + 1]
        if (element + siguiente == target) {
            resultado.push(i)
            resultado.push(i + 1)
        }

    }
    return resultado
}
console.log(dosSuman([2, 7, 11, 15], 9)); // [0, 1]