var a = 1;
let b = 2;
const c = 3;

a = 10 // Qual a saída?
b = 20 // Qual a saída?
c = 30 // Qual a saída?

console.log(a)
console.log(b)
console.log(c)

// Para as duas primeiras variaveis declaradas com let e var a execução fluiu conforme esperado e os valores foram alterados normalmente
// No caso da terceira variavel, ocorreu um erro de execução no momento da alteração de valor, na linha 7
// Isso ocorre pois, variaveis declaradas como const são estaticas, portanto não podem ser alteradas