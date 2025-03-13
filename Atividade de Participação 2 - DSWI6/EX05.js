function preprend(list, item){
    lista = {
        valor: item,
        restante: list
    }

    return lista
}

let lista = {
    valor: 1,
    restante: {
        valor: 2,
        restante: {
            valor: 3,
            restante: null
        }
    }
};

console.log(preprend(lista, 0))