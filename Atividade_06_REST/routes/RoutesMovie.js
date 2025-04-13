const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie_controller');

router.get('/', movieController.getMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);

module.exports = router;




/*
// Nosso "banco de dados" local e ID incremental
let filmes = [
  { id: 1, title: "Pulp Fiction", description: "Drama, Policial" },
  { id: 2, title: "Gladiador", description: "Histórico, Ação" }
];
let proximoId = 3;

// GET /movie
router.get('/', (req, res) => {
  if (filmes.length === 0) return res.status(404).json({ mensagem: 'Nenhum filme encontrado.' });
  res.status(200).json(filmes);
});

// GET /movie/:id
router.get('/:id', (req, res) => {
  const filme = filmes.find(f => f.id === parseInt(req.params.id));
  if (!filme) return res.status(404).json({ mensagem: 'Filme não encontrado.' });
  res.status(200).json(filme);
});

// POST /movie
router.post('/', (req, res) => {
  const filme = {id: idAtual++, title:req.body.title, description:req.body.description}

  if(filme.title == null || filme.description == null){return req.statusCode(404).json({mensagem: "Titulo e Descrição são campos obrigatórios, certifique-se de preenche-los corretamente"})}
  
  filmes.push(filme)
  res.status(201).json(filme)
});

module.exports = router;*/