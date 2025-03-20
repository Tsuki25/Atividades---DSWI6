function arrayToList(array) {
    let lista = null;

    for (let i = array.length - 1; i >= 0; i--) {
        lista = { 
            valor: array[i], 
            restante: lista 
        };
    }

    return lista;
}

function arrayToList(array) {
    let lista = null;

    for (let i = array.length - 1; i >= 0; i--) {
        lista = { 
            valor: array[i], 
            restante: lista 
        };
    }

    return lista;
}

console.log(arrayToList([1, 2, 3]));