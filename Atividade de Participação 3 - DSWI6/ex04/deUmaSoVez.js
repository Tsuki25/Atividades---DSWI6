import fs from "fs";
import path from "path";

const init = Date.now()

const caminhoArquivo = path.join(process.cwd(), '/ex04/dados.csv');
const data = fs.readFileSync(caminhoArquivo,"utf8")
console.log(data)

const end = Date.now(); // Marca o final da leitura
console.log(`Tempo de execução: ${end - init} ms`);