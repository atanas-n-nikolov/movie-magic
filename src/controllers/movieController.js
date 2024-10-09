import { Router } from "express";
import movieService from "../services/movieService.js";
const router = Router();

router.get('/create', (req, res) => {
  res.render('movies/create');
});

router.post('/create', async (req, res) => {
  await movieService.create(req.body);
  res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
  const id = req.params.id;
  const movie = await movieService.getOne(id).lean();
  res.render('movies/details', { movie });
});

router.get('/search', async (req, res) => {
  const filter = req.query;
  const movies = await movieService.getAll(filter);
  res.render('movies/search', { movies, filter });
});

export default router;