import Movie from "../models/Movie.js";

const getAll = async (filter = {}) => {
  let moviesQuery = Movie.find().lean();

  return moviesQuery;
};

const create = (movie) =>  Movie.create(movie);

const getOne = (id) => Movie.findById(id).lean();

export default {
  getAll,
  getOne,
  create,
};