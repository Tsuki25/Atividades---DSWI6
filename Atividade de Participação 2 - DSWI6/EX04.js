function listaToArray(list){

    let arr = []

    while(list !== null){
        arr.push(list.valor)
        list = list.restante
    }

    return arr

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

console.log(listaToArray(lista));

