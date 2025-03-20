function flattenArray(arrays) {
    return arrays.reduce((unificado, arrayAtual) => unificado.concat(arrayAtual), []);
}

const entrada = [[1, 2, 3], [4, 5], [6]];
const resultado = flattenArray(entrada);
console.log(resultado);
