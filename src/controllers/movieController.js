import { Router } from "express";
import movieService from "../services/movieService.js";
const router = Router();

router.get('/movie/create', (req, res) => {
  res.render('movies/create');
});

router.post('/movie/create', async (req, res) => {
  await movieService.create(req.body);
  res.redirect('/');
});

router.get('/movie/:id', async (req, res) => {
  const id = req.params.id;
  const movie = await movieService.getOne(id);
  res.render('movies/details', { movie });
});

export default router;