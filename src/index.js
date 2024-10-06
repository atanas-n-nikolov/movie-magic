import express from "express";
import handlebarsInit from "./config/handlebarsInit.js";
import expressInit from "./config/expressInit.js";
import mongooseInit from "./config/mongooseInit.js";
const app = express();

mongooseInit();
handlebarsInit(app);
expressInit(app);

app.get('/', (req, res) => {
  res.render('movies/home');
});

app.listen(5000, () => console.log('Server is listening on port: http://localhost:5000 ...'));