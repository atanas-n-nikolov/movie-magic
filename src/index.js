import express from "express";
import mongoose from "mongoose";
import { ExpressHandlebars } from "express-handlebars.js";
import handlebarsInit from "./config/handlebarsInit.js";
import expressInit from "./config/expressInit.js";

const app = express();

handlebarsInit(app);
expressInit(app);

app.get('/', (req, res) => {
  res.render('movies/home');
});

app.listen(5000, () => console.log('Server is listening on port: http://localhost:5000 ...'));