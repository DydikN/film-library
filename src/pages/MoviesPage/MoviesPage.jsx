import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchMovie } from 'api/films';
import Loader from 'components/Loader/Loader';

import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getSearchMovie(search);

        setItems(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [search]);

  const handleChangeSearch = search => {
    setSearchParams({ search });
  };

  return (
    <div>
      <MoviesSearchForm onSubmit={handleChangeSearch} />
      {loading && <Loader />}
      {error && error.message}
      {items.length > 0 && <MoviesList items={items} />}
    </div>
  );
};

export default MoviesPage;
