import { Router } from "express";
import movieService from "../services/movieService.js";
const router = Router();

router.get('/movies/create', (req, res) => {
  res.render('movies/create');
});

router.post('/movies/create', async (req, res) => {
  await movieService.create(req.body);
  res.redirect('/');
});

router.get('/movies/details/:id', async (req, res) => {
  const id = req.params.id;
  const movie = await movieService.getOne(id).lean();
  res.render('movies/details', { movie });
});

router.get('/movies/search', async (req, res) => {
  const filter = req.query;
  const movies = await movieService.getAll(filter).lean();
  res.render('home', { isSearch: true, movies, filter });
});

router.get('*', (req, res) => {
  res.render('home/404');
});

export default router;