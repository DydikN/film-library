import { useEffect, useState } from 'react';
import { getMovies } from 'components/api/films';

import MoviesList from './MoviesList/MoviesList';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getMovies();

        setItems(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {items.length > 0 && <MoviesList items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Movies;
