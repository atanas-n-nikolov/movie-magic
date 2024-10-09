import Movie from "../models/Movie.js";

const getAll = async (filter = {}) => {
  let moviesQuery = Movie.find().lean();
  if(filter.search) {
    moviesQuery = moviesQuery.find({ title: { $regex: filter.search, $options: 'i' } });
  };

  if(filter.genre) {
    moviesQuery = moviesQuery.find({ genre: filter.genre.toLowerCase() });
  };

  if(filter.year) {
    moviesQuery = moviesQuery.find({ year: filter.year });
  };

  return moviesQuery;
};

const create = (movie) =>  Movie.create(movie);

const getOne = (id) => Movie.findById(id).lean();

export default {
  getAll,
  getOne,
  create,
};