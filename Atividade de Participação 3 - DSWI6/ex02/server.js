import { User, printName, printAge } from "./user.js";
import express from "express";

const usuario = new User("Amazing", 100)

const app = express();

app.get("/user_data", (req, res) => {
    const userNameMessage = `User's name is ${usuario.name}`;
    const userAgeMessage = `User's age is ${usuario.age}`;

    // Responde com as mensagens formatadas
    res.send(`${userNameMessage} and ${userAgeMessage}`);
});

// Inicializando o servidor na porta 8080
app.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080/");
});