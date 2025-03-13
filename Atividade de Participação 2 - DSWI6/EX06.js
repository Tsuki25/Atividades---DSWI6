function nth(list, index){
    for(let i = 0; i < index; i++){
        if(list.restante == null) return undefined
        else{
            list = list.restante
        }
    }

    return list.valor
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

console.log(nth(lista, 3))