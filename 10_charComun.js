// Dado un string, devolver el carácter que más veces se repite. Si hay empate, devolver cualquiera de ellos.

function caracterMasFrecuente(str) {
    const chars = {}
    for (let char of str) {
        chars[char] = (chars[char] || 0) + 1
    }
    let maxnumber = 0
    let maxchar = ""
    for (let char in chars) {
        if (chars[char] > maxnumber) {
            maxnumber = chars[char]
            maxchar = char
        }
    }
    console.log("este", maxchar);
    return maxchar
}
caracterMasFrecuente("gog")