import fs from "fs";

const init = Date.now(); // Marca o início da leitura

const stream = fs.createReadStream("ex04/dados.csv", { encoding: "utf8" });

stream.on("data", (chunk) => {
    console.log("Chunk recebido:", chunk);
});

stream.on("end", () => {
    const end = Date.now(); // Marca o final da leitura
    console.log(`Tempo de execução: ${end - init} ms`);
});

stream.on("error", (error) => {
    console.error("Erro ao ler o arquivo:", error);
});