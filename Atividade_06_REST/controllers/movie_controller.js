let idAtual = 2;
let filmes = [
  { id: 1, title: "Pulp Fiction", description: "Drama, Policial" },
  { id: 2, title: "Duna", description: "Ficção Científica, Drama" }
];

exports.getMovies = (req, res) => {
  if (filmes.length === 0) return res.status(404).json({ mensagem: "Nenhum filme encontrado." });
  res.json(filmes);
};

exports.getMovieById = (req, res) => {
  const filme = filmes.find(f => f.id === parseInt(req.params.id));
  if (!filme) return res.status(404).json({ mensagem: "Filme não encontrado." });
  res.json(filme);
};

exports.createMovie = (req, res) => {
    const filme = {id: idAtual++, title:req.body.title, description:req.body.description}

    if(filme.title == null || filme.description == null){return req.statusCode(404).json({mensagem: "Titulo e Descrição são campos obrigatórios, certifique-se de preenche-los corretamente"})}
    
    filmes.push(filme)
    res.status(201).json(filme)
};