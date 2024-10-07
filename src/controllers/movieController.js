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

export default router;