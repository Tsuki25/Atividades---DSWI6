const express = require('express') // Importa o Express
const app = express() // Instancia um objeto do express, usado para definir as chamadas e as rotas do servidor
const MovieRouter = require('./routes/RoutesMovie');

app.use(express.json())// Usado para tratar Json no express

// Usar o roteador em /movie
app.use('/movie', MovieRouter);


/*app.get('/', (req, res)=> {//Estrutura uma rota padrão, a sintaxe, baseia-se em promises
    res.send("Funfando")
}) 

let idAtual = 2
let filmes = [
    { id: 1, title: "Pulp Fiction", description: "Drama, Policial" },
    { id: 2, title: "Duna", description: "Ficção Cientifica, Drama" }
]


app.get("/movie", (req, res) => {
    if (filmes.length === 0) return res.status(404).json({ mensagem: 'Nenhum filme encontrado.' });
    res.json(filmes)
})

app.get("/movie/:id", (req, res) => {
    const filme = filmes.find(f => f.id === parseInt(req.params.id));
    if (!filme) return res.status(404).json({ mensagem: 'Filme não encontrado.' });
    res.status(200).json(filme);
})

app.post("/movie", (req, res) => {
    const filme = {id: idAtual++, title:req.body.title, description:req.body.description}

    if(filme.title == null || filme.description == null){return req.statusCode(404).json({mensagem: "Titulo e Descrição são campos obrigatórios, certifique-se de preenche-los corretamente"})}
    
    filmes.push(filme)
    res.status(201).json(filme)
})*/

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`servidor na em http://localhost:${PORT}`)
})