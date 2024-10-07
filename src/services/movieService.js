import Movie from "../models/Movie.js";

const create = (movie) =>  Movie.create(movie);

export default {
  create,
}