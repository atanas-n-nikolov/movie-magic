import { Router } from "express";

const router = Router();

router.get('/movie/create', (req, res) => {
  res.render('movies/create');
});

router.post('/movie/create', (req, res) => {
  console.log(req.body);
});

export default router;