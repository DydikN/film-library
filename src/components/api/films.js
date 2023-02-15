import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0d2c8f8ee54bc3ab0aecf9b789c7f474',
  },
});

export const getMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');

  return data;
};

export const getSearchMovie = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
      page: 1,
      include_adul: false,
    },
  });

  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: {
      language: 'en-US',
    },
  });

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  return data;
};
