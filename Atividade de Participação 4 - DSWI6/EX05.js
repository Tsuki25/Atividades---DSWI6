function somar(num1, num2){
    return new Promise((resolve, reject) => {
        const resultado = num1+num2
        if(resultado%2 == 0){
            resolve(callbackSucesso(resultado));
        }else{
            reject(callbackError(resultado));
        }
    });
}

function callbackSucesso(resultado){
    return(`Resposta gerada com sucesso! O número ${resultado} é par.`);
}
   
function callbackError(resultado){
    return(`Erro! A operação gerou um número ímpar: ${resultado}.`);
}

somar(1,2)
    .then(console.log)
    .catch(console.error)

somar(2,2)
    .then(console.log)
    .catch(console.error)
   