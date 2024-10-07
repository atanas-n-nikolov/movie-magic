import Movie from "../models/Movie.js";

const getAll = async (filter = {}) => {
  let moviesQuery = await Movie.find();

  return moviesQuery;
};

const create = (movie) =>  Movie.create(movie);

export default {
  getAll,
  create,
}