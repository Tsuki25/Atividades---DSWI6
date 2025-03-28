function verificarImparPar(value) {
    return new Promise((resolve, reject) => {
        if (typeof value !== "number") {
            reject("Erro!");
        } else if (value % 2 === 0) { // É par
            setTimeout(() => {
                resolve("Pares");
            }, 2000);
        } else { // É ímpar
            setTimeout(() => {
                resolve("Ímpares");
            }, 1000);
        }
    });
}

// Testes
verificarImparPar(1)
    .then(console.log)
    .catch(console.error);

verificarImparPar(2)
    .then(console.log)
    .catch(console.error);

verificarImparPar("Slc num compensa")
    .then(console.log)
    .catch(console.error);