import Movie from "../models/Movie.js";

const getAll = async (filter = {}) => {
  let moviesQuery = await Movie.find();

  return moviesQuery;
};

const create = (movie) =>  Movie.create(movie);

const getOne = async (id) => {
  const movie = await Movie.findById(id).lean();
  return movie;
};

export default {
  getAll,
  getOne,
  create,
};