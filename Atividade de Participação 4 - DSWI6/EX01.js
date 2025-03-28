function dobrarEm5Segundos(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * 2);
        }, 5000);
    });
}

// Exemplo de uso
dobrarEm5Segundos(10).then(resultado => {
    console.log("Resultado:", resultado); // Deve exibir "Resultado: 20" após 5 segundos
});