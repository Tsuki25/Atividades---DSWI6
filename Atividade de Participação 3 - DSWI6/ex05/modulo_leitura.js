import fs from "fs";

// Leitura síncrona de arquivo
let buffer = fs.readFileSync("test.data"); // Retorna um buffer (array de bytes)
let text = fs.readFileSync("data.csv", "utf8"); // Retorna o conteúdo como String

// Leitura assíncrona baseada em Promises
fs.promises
  .readFile("ex05/dados.csv", "utf8")
  .then(processFileText)
  .catch(handleReadError);

// Função assíncrona com await
export async function processText(filename, encoding = "utf8") {
    let text = await fs.promises.readFile(filename, encoding);
    return text;
}

// Funções de callback para exemplo de uso
function processFileText(data) {
  console.log("Arquivo lido com sucesso:", data);
}